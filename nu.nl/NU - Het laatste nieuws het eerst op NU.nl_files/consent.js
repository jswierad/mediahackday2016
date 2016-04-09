/**
 * Sanoma Media Consent Manager
 *
 * Copyright 2012, Sanoma Media B.V.
 */
var Consent = (function() {

	var SITE = 'nu.nl';
	var LAST_MODIFIED = new Date(2015,9,29,17,16,52);
	var OPTIN_MANDATORY = 0;
	var CATEGORIES = ['atinternet', 'ads', 'stats', 'functional', 'interests', 'stir', 'social', 'videoplaza'];
	var ALLOWED_CATEGORIES = ['atinternet', 'stats', 'functional', 'stir', 'videoplaza'];
	var REVOKE_SINCE = 0;
	var REVOKE_CATEGORIES = [];
	var COOKIE_NAME = 'site_consent';
	var COOKIE_BARVIEWCOUNT = 'consentBarViewCount';
	var cachedBarViewCount;
	
	var GET_OPTIN_URL = 'privacy.www.nu.nl/img/getoptin.gif';
	var COOKIEBAR_JS_URL = 'privacy.www.nu.nl/script/cookiebar.js';
	var PREFERENCES_URL = 'privacy.www.nu.nl/settings';
	var EXPLAIN_URL = 'privacy.www.nu.nl/policy';
	var ACCEPT_URL = 'privacy.snmmd.nl/site/nu.nl/accept';
	var DISPATCH_URL = '';

	Consent = function() {
		var pass = function() {
			return (window.location.hash.indexOf('consent=pass') > -1);
		}
		var in_frame = function() {
			return (window.location != window.parent.location);
		}
		var cookies_enabled = function() {
			var cookieEnabled = (navigator.cookieEnabled) ? true : false;
			if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
				document.cookie="testcookie";
				cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
				var exprires = (new Date(2000,1,1,1,1,1)).toGMTString();
				document.cookie="testcookie=; expires="+expires+"; path=/"
			}
			return (cookieEnabled);
		}
		var get_cookie = function(cookieName) {
			cookieName = cookieName || COOKIE_NAME;
			var nameEQ = cookieName + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) {
					return decodeURIComponent(c.substring(nameEQ.length,c.length))
				}
			}
			return null;
		}
		var is_revoked = function() {
			if (REVOKE_SINCE != null && REVOKE_SINCE > get_timestamp()) {
				for (var i=0;i<REVOKE_CATEGORIES.length;i++) {
					if (!this.has_optin(REVOKE_CATEGORIES[i])) {
						return true;
					}
				}
			}
			return false;
		}
		var is_mandatory = function() {
			if (OPTIN_MANDATORY) {
				for (var i=0;i<CATEGORIES.length;i++) {
					if (!this.has_optin(CATEGORIES[i])) {
						return true;
					}
				}
			}
			return false
		}
		var is_valid = function() {
		
			return !(!get_cookie() || (get_timestamp() < LAST_MODIFIED) || is_revoked() || is_mandatory());
		
		}
		var get_timestamp = function() {
			var cookie = get_cookie();
			if (cookie) {
				var components = cookie.split(':')
				if(components.length==4) {
					var seconds = parseInt(components[1])
					return (new Date(0)).setUTCSeconds(seconds)
				}
			}
			return null;
		}
		var get_optins = function() {
		
			var cookie = get_cookie();
			if (cookie) {
				var components = cookie.split(':')
				if(components.length==4) {
					return components[3].split(',')
				}
			}
			
			if (typeof(cachedBarViewCount) == 'undefined') {
				cachedBarViewCount = get_cookie(COOKIE_BARVIEWCOUNT);
			} 
			return ( cachedBarViewCount >= 1 ) ? CATEGORIES : ALLOWED_CATEGORIES;
			
		
		}
		var get_site_optin = function() {
			var image = new Image();
			var ord = Math.random()*10000000000000000;
			image.src = window.location.protocol+'//'+GET_OPTIN_URL+'?ord='+ord;
			image.onload = function() {
				if(!get_cookie() && !in_frame()) {
					load_cookiebar()
				}
			}
		}
		var uncomment = function(html) {
			var html = html.replace(/^\s+|\s+$/g, '')
			var start = html.indexOf('<!--')
			var end = html.indexOf('-->')
			if(start > -1 && end > -1) {
				return html.substr(start+4, end-start-4)
			}
			return html
		}
		var load_cookiebar = function() {
			var body = document.getElementsByTagName('body')[0];
			var script = document.createElement('script');
			script.setAttribute('src', window.location.protocol+'//'+COOKIEBAR_JS_URL);
			body.appendChild(script);
		}
		var get_consent = function() {
		
			var target = window.location.protocol+'//'+DISPATCH_URL+'?origin='+encodeURIComponent(window.location.href);
			window.location.href = target;
		
		}
		
		var check = function() {
		
			var handler = function() {
				if(!pass() && cookies_enabled() && !get_cookie()) {
					get_site_optin()
				}
			}
			if (window.addEventListener) {
                window.addEventListener('load', handler, false);
            } else if (window.attachEvent) {
                window.attachEvent('onload', handler);
            }
			return this;
		
		}
		var validate = function() {
			if(!pass() && !is_valid() && cookies_enabled()) {
				get_consent()
			}
			return this;
		}
		this.get_accept_url = function() {
			return window.location.protocol+'//'+ACCEPT_URL+'?origin='+encodeURIComponent(window.location.href);
		}
		this.get_preferences_url = function() {
			return 'http://'+PREFERENCES_URL+'?origin='+encodeURIComponent(window.location.href);
		}
		this.get_explain_url = function() {
			return window.location.protocol+'//'+EXPLAIN_URL+'?origin='+encodeURIComponent(window.location.href);
		}
		this.has_optin = function(category) {
			var categories = get_optins();
			for(var i=0;i<categories.length;i++) {
				if(categories[i]==category) {
					return true;
				}
			}
			return false;
		}
		this.render = function() {
			for(var i=0;i<CATEGORIES.length;i++) {
				var category = CATEGORIES[i];
				if (this.has_optin(category)) {
					var className = 'optin-'+category;
				} else {
					var className = 'optout-'+category;
				}
				var elements = getElementsByClassName(className);
				for (var n=0;n<elements.length;n++) {
					var el = elements[n];
					el.innerHTML = uncomment(el.innerHTML)
				}
			}
		}
		
		check();
		
	}

	/*
		getElementsByClassName
		Developed by Robert Nyman, http://www.robertnyman.com
		Code/licensing: http://code.google.com/p/getelementsbyclassname/
	*/
	var getElementsByClassName = function (className, tag, elm){
		if (document.getElementsByClassName) {
			getElementsByClassName = function (className, tag, elm) {
				elm = elm || document;
				var elements = elm.getElementsByClassName(className),
					nodeName = (tag)? new RegExp("\\b" + tag + "\\b", "i") : null,
					returnElements = [],
					current;
				for(var i=0, il=elements.length; i<il; i+=1){
					current = elements[i];
					if(!nodeName || nodeName.test(current.nodeName)) {
						returnElements.push(current);
					}
				}
				return returnElements;
			};
		}
		else if (document.evaluate) {
			getElementsByClassName = function (className, tag, elm) {
				tag = tag || "*";
				elm = elm || document;
				var classes = className.split(" "),
					classesToCheck = "",
					xhtmlNamespace = "http://www.w3.org/1999/xhtml",
					namespaceResolver = (document.documentElement.namespaceURI === xhtmlNamespace)? xhtmlNamespace : null,
					returnElements = [],
					elements,
					node;
				for(var j=0, jl=classes.length; j<jl; j+=1){
					classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]";
				}
				try	{
					elements = document.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null);
				}
				catch (e) {
					elements = document.evaluate(".//" + tag + classesToCheck, elm, null, 0, null);
				}
				while ((node = elements.iterateNext())) {
					returnElements.push(node);
				}
				return returnElements;
			};
		}
		else {
			getElementsByClassName = function (className, tag, elm) {
				tag = tag || "*";
				elm = elm || document;
				var classes = className.split(" "),
					classesToCheck = [],
					elements = (tag === "*" && elm.all)? elm.all : elm.getElementsByTagName(tag),
					current,
					returnElements = [],
					match;
				for(var k=0, kl=classes.length; k<kl; k+=1){
					classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"));
				}
				for(var l=0, ll=elements.length; l<ll; l+=1){
					current = elements[l];
					match = false;
					for(var m=0, ml=classesToCheck.length; m<ml; m+=1){
						match = classesToCheck[m].test(current.className);
						if (!match) {
							break;
						}
					}
					if (match) {
						returnElements.push(current);
					}
				}
				return returnElements;
			};
		}
		return getElementsByClassName(className, tag, elm);
	};

	//return (new Consent()).validate();
	return new Consent();
})();