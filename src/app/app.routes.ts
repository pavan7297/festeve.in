import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { PurohitComponent } from './component/pages/purohit/purohit.component';
import { ClothingComponent } from './component/pages/clothing/clothing.component';
import { EssentialsComponent } from './component/pages/essentials/essentials.component';
import { AboutusComponent } from './component/pages/aboutus/aboutus.component';
import { ContactusComponent } from './component/pages/contactus/contactus.component';
import { SliderComponent } from './component/const/slider/slider.component';
import { SignupComponent } from './component/const/signup/signup.component';
import { Signup2Component } from './component/const/signup2/signup2.component';
import { FormalsComponent } from './component/pages/sub-pages/formals/formals.component';
import { SemiformalsComponent } from './component/pages/sub-pages/semiformals/semiformals.component';
import { EthnicsComponent } from './component/pages/sub-pages/ethnics/ethnics.component';
import { LuxeethnicComponent } from './component/pages/sub-pages/luxeethnic/luxeethnic.component';
import { DailyethnicComponent } from './component/pages/sub-pages/dailyethnic/dailyethnic.component';
import { MenComponent } from './component/pages/sub-pages/men/men.component';
import { WomenComponent } from './component/pages/sub-pages/women/women.component';
import { ChildComponent } from './component/pages/sub-pages/child/child.component';
import { ProductDetailComponent } from './component/pages/sub-pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Purohit', component: PurohitComponent },
  { path: 'clothing', component: ClothingComponent },
  { path: 'essentials', component: EssentialsComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'sliders', component: SliderComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup2', component: Signup2Component },
  { path: 'clothing/Formals', component: FormalsComponent },
  { path: 'clothing/semi-formals', component: SemiformalsComponent },
  { path: 'clothing/ethnics', component: EthnicsComponent },
  { path: 'clothing/luxe-ethnics', component: LuxeethnicComponent },
  { path: 'clothing/daily-ethnics', component: DailyethnicComponent },
  { path: 'clothing/men', component: MenComponent },
  { path: 'clothing/women', component: WomenComponent },
  { path: 'clothing/child', component: ChildComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];
