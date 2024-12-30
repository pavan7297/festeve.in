package com.festeve.config;

import java.beans.PropertyVetoException;
import java.util.Map;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.mchange.v2.c3p0.ComboPooledDataSource;

import jakarta.persistence.EntityManagerFactory;
import lombok.extern.slf4j.Slf4j;

@Configuration
@EnableTransactionManagement
@Slf4j
public class HibernateConfig {

    @Value("${spring.datasource.driver-class-name}")
    private String DB_DRIVER;

    @Value("${spring.datasource.url}")
    private String DB_URL;

    @Value("${spring.datasource.username}")
    private String DB_USERNAME;

    @Value("${spring.datasource.password}")
    private String DB_PWD;

    @Value("${spring.jpa.properties.hibernate.dialect}")
    private String HIBERNATE_DIALECT;

    @Value("${spring.jpa.properties.hibernate.show_sql}")
    private String HIBERNATE_SHOW_SQL;

    @Value("${spring.jpa.properties.hibernate.hbm2ddl.auto}")
    private String HIBERNATE_HBM2DDL_AUTO;

    @Value("${entitymanager.packagesToScan}")
    private String ENTITYMANAGER_PACKAGES_TO_SCAN;

    @Value("${spring.jpa.properties.hibernate.format_sql}")
    private String HIBERNATE_FORMAT_SQL;

    // C3P0 Configaration
    @Value("${spring.jpa.properties.hibernate.c3p0.max_size}")
    private String CONN_POOL_MAX_SIZE;

    @Value("${spring.jpa.properties.hibernate.c3p0.min_size}")
    private String CONN_POOL_MIN_SIZE;

    @Value("${spring.jpa.properties.hibernate.c3p0.idle_test_period}")
    private String CONN_POOL_IDLE_PERIOD;

    @Value("${spring.jpa.properties.hibernate.c3p0.acquire_increment}")
    private String ACQUIRE_INCREMENT;

    @Value("${spring.jpa.properties.hibernate.c3p0.max_statements_per_connection}")
    private String MAX_STATEMENT_PER_CONNECTION;

    @Value("${spring.jpa.properties.hibernate.c3p0.numHelperThreads}")
    private String NO_OF_HELPER_THREADS;

    @Value("${spring.jpa.properties.hibernate.c3p0.timeout}")
    private String TIME_OUT;

    @Value("${spring.jpa.properties.hibernate.c3p0.acquireRetryAttempts}")
    private String ACQUIRE_RETRY_ATTEMPTS;

    @Value("${spring.jpa.properties.hibernate.c3p0.acquireRetryDelay}")
    private String ACQUIRE_RETRY_DELAY;

    @Bean(name = "entityManagerFactory")
    public LocalSessionFactoryBean productonSessionFactory() {
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(productionDataSource());
        Properties hibernateProperties = new Properties();
        
        // Ensure Hibernate properties are set correctly
        hibernateProperties.put("hibernate.dialect", HIBERNATE_DIALECT);
        hibernateProperties.put("hibernate.show_sql", HIBERNATE_SHOW_SQL);
        hibernateProperties.put("hibernate.hbm2ddl.auto", HIBERNATE_HBM2DDL_AUTO);
        hibernateProperties.put("hibernate.format_sql", HIBERNATE_FORMAT_SQL);
        
        // You can also add some additional settings to handle the dialect or database
        hibernateProperties.put("hibernate.c3p0.max_size", CONN_POOL_MAX_SIZE);
        hibernateProperties.put("hibernate.c3p0.min_size", CONN_POOL_MIN_SIZE);
        hibernateProperties.put("hibernate.c3p0.idle_test_period", CONN_POOL_IDLE_PERIOD);
        hibernateProperties.put("hibernate.c3p0.acquire_increment", ACQUIRE_INCREMENT);
        hibernateProperties.put("hibernate.c3p0.max_statements_per_connection", MAX_STATEMENT_PER_CONNECTION);
        hibernateProperties.put("hibernate.c3p0.numHelperThreads", NO_OF_HELPER_THREADS);
        hibernateProperties.put("hibernate.c3p0.timeout", TIME_OUT);
        hibernateProperties.put("hibernate.c3p0.acquireRetryAttempts", ACQUIRE_RETRY_ATTEMPTS);
        hibernateProperties.put("hibernate.c3p0.acquireRetryDelay", ACQUIRE_RETRY_DELAY);

        sessionFactory.setHibernateProperties(hibernateProperties);
        log.info("::::::::Hibernate Session factory is created::::::" + sessionFactory);
        return sessionFactory;
    }

    @Bean(destroyMethod = "close")
    public ComboPooledDataSource productionDataSource() {
    	ComboPooledDataSource  dataSource = new ComboPooledDataSource();

        try {
            dataSource.setDriverClass(DB_DRIVER);
        } catch (PropertyVetoException pve) {
            return null;
        }
        dataSource.setJdbcUrl(DB_URL);
        dataSource.setUser(DB_USERNAME);
        dataSource.setPassword(DB_PWD);
        dataSource.setMinPoolSize(Integer.parseInt(CONN_POOL_MIN_SIZE));
        dataSource.setMaxPoolSize(Integer.parseInt(CONN_POOL_MAX_SIZE));
        dataSource.setIdleConnectionTestPeriod(Integer.parseInt(CONN_POOL_IDLE_PERIOD));
        dataSource.setAcquireIncrement(Integer.parseInt(ACQUIRE_INCREMENT));
        dataSource.setAcquireRetryAttempts(Integer.parseInt(ACQUIRE_RETRY_ATTEMPTS));
        dataSource.setAcquireRetryDelay(Integer.parseInt(ACQUIRE_RETRY_DELAY));
        dataSource.setCheckoutTimeout(Integer.parseInt(TIME_OUT));
        dataSource.setMaxStatements(Integer.parseInt(MAX_STATEMENT_PER_CONNECTION));
        dataSource.setNumHelperThreads(Integer.parseInt(NO_OF_HELPER_THREADS));
        dataSource.setAutoCommitOnClose(true);
        dataSource.setUnreturnedConnectionTimeout(Integer.parseInt(TIME_OUT));
        log.info("::::::::ComboPooledDataSource::::" + DB_URL + "::: is created::::::" + dataSource);
        return dataSource;
    }

    @Bean
    public HibernateTransactionManager myTransactionManager() {
        HibernateTransactionManager txManager = new HibernateTransactionManager();
        txManager.setSessionFactory(productonSessionFactory().getObject());
        return txManager;
    }

    @Bean
    @Primary  // Marking this transaction manager as primary
    public PlatformTransactionManager transactionManager1(EntityManagerFactory emf) {
        return new JpaTransactionManager(emf);
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(productionDataSource());
        em.setPackagesToScan("com.jwtAuth");  // Ensure correct package for entities

        // Use Hibernate as JPA provider
        em.setJpaVendorAdapter(new HibernateJpaVendorAdapter());

        // Ensure Hibernate properties are set correctly
        em.setJpaPropertyMap(Map.of(
                "hibernate.dialect", HIBERNATE_DIALECT,
                "hibernate.show_sql", HIBERNATE_SHOW_SQL,
                "hibernate.hbm2ddl.auto", HIBERNATE_HBM2DDL_AUTO,
                "hibernate.format_sql", HIBERNATE_FORMAT_SQL
        ));

        return em;
    }

    @Bean
    public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
        return new JpaTransactionManager(emf);
    }

}
