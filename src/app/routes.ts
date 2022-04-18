import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";



export const routes: Routes = [
	{ 
		path: 'home', // the path used in your URL
		component: HomeComponent
	},
	{ 
		path: 'about', // the path used in your URL
		component: AboutComponent
	},
	{ 
		path: 'portfolio', // the path used in your URL
		component: PortfolioComponent
	},
	{
		path: 'form',
		component: FormComponent
	},
	{
		path: '',
		component: HomeComponent
	}

]