module application {
    export var id:string = null;
    export var version:string = null;
    export var defaultPath = null;

    /**
     * An array of HTMLElements that are the Cards of the Savvy application
     */
    export var cards:HTMLElement[] = [];

    /**
     * Loads a card in the app corresponding to id
     * @param path A path to a new card. This must be a card ID or a string beginning with a card ID followed by a slash. Further characters may follow the slash.
     */
    application["goto"] = (path:string, transition:SavvyTransition = Transition.CUT):void => {
        if (typeof path == "string") {
            Savvy._goto.call(Savvy, path, transition);
        } else {
            throw "A string indicating a card ID must be passed to application.goto method.";
        }
    }
    
	export function read(url:string, asXML:boolean = false):any {
		var xmlhttp:XMLHttpRequest = new XMLHttpRequest(); // create the XMLHttpRequest object
		xmlhttp.open("GET", url, false);
        xmlhttp.setRequestHeader("Cache-Control", "no-store"); // try not to cache the response
		xmlhttp.send();
		if (xmlhttp.status !== 200 && xmlhttp.status !== 0) {
			console.error("HTTP status "+xmlhttp.status+" returned for file: " + url);
			return null;
		}

        if (asXML) {
            return xmlhttp.responseXML;
        } else {
            return xmlhttp.responseText;
        }
	}
}
