import * as webix from "@xbs/webix-pro";
import {JetApp, EmptyRouter, HashRouter} from "webix-jet";

import "./styles/app.scss";

export default class MyApp extends JetApp {
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top/start",
			webix   : webix,
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE) {
	webix.ready(() => new MyApp().render() );
}