
/**** JQuery was removed from toolsCommon70. You should include one of the JQuery files under the "JQuery" folder ****/


if(!this.JSON){this.JSON={};}
(function(){function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());

/*
New API enums. Generated from Freeze20 
*/
var ActionCode = {}; ActionCode.AC_FLYTO = 0; ActionCode.AC_CIRCLEPATTERN = 1; ActionCode.AC_OVALPATTERN = 2; ActionCode.AC_LINEPATTERN = 3; ActionCode.AC_ARCPATTERN = 4; ActionCode.AC_FOLLOWBEHIND = 5; ActionCode.AC_FOLLOWABOVE = 6; ActionCode.AC_FOLLOWBELOW = 7; ActionCode.AC_FOLLOWRIGHT = 8; ActionCode.AC_FOLLOWLEFT = 9; ActionCode.AC_FOLLOWBEHINDANDABOVE = 10; ActionCode.AC_FOLLOWCOCKPIT = 11; ActionCode.AC_FOLLOWFROMGROUND = 12; ActionCode.AC_STOP = 13; ActionCode.AC_JUMP = 14; ActionCode.AC_DELETE = 15; ActionCode.AC_EDIT_FINISHED = 16; ActionCode.AC_OBJECT_ADDED = 17; ActionCode.AC_PLAY = 18; ActionCode.AC_SHOW = 19; ActionCode.AC_EDIT_STARTED = 20; ActionCode.AC_SELCHANGED = 21; ActionCode.AC_WAYPOINT_REACHED = 22; ActionCode.AC_GROUP_ADDED = 23; ActionCode.AC_LAYER_ADDED = 24; ActionCode.AC_LAYER_REFRESHED = 25; ActionCode.AC_ITEM_MOVED=26; var AltitudeTypeCode = {}; AltitudeTypeCode.ATC_TERRAIN_RELATIVE = 0; AltitudeTypeCode.ATC_PIVOT_RELATIVE = 1; AltitudeTypeCode.ATC_ON_TERRAIN = 2; AltitudeTypeCode.ATC_TERRAIN_ABSOLUTE = 3; AltitudeTypeCode.ATC_DEFAULT = 999; var DynamicMotionStyle = {}; DynamicMotionStyle.MOTION_GROUND_VEHICLE = 0; DynamicMotionStyle.MOTION_AIRPLANE = 1; DynamicMotionStyle.MOTION_HELICOPTER = 2; DynamicMotionStyle.MOTION_HOVER = 3; var DynamicObjectType = {}; DynamicObjectType.DYNAMIC_3D_MODEL = 0; DynamicObjectType.DYNAMIC_TEXT_LABEL = 1; DynamicObjectType.DYNAMIC_IMAGE_LABEL = 2; DynamicObjectType.DYNAMIC_VIRTUAL = 3; var LabelStyle = {}; LabelStyle.LS_DEFAULT = 0; LabelStyle.LS_STREET = 1; LabelStyle.LS_STATE = 2; var MsgClient6 = {}; MsgClient6.MC_LEFT = 0; MsgClient6.MC_MAIN = 2; MsgClient6.MC_MESSAGE_BAR = 3; MsgClient6.MC_FLOAT = 4; MsgClient6.MC_POPUP = 5; var MsgType = {}; MsgType.TYPE_TEXT = 0; MsgType.TYPE_URL = 1; MsgType.TYPE_SCRIPT = 3; var ModelTypeCode = {}; ModelTypeCode.MT_NORMAL = 0; ModelTypeCode.MT_ANIMATION = 1; ModelTypeCode.MT_PROGRESSIVE = 2; var LayerGeometryType = {}; LayerGeometryType.LGT_POINT = 0; LayerGeometryType.LGT_POLYLINE = 1; LayerGeometryType.LGT_POLYGON = 2; LayerGeometryType.LGT_COLLECTION = 3; LayerGeometryType.LGT_NONE = -1; var SphereStyle = {}; SphereStyle.SPHERE_NORMAL = 0; SphereStyle.SPHERE_UPPER_HALF = 1; SphereStyle.SPHERE_LOWER_HALF = 2; SphereStyle.SPHERE_UPPER_HALF_BASE = 3; SphereStyle.SPHERE_LOWER_HALF_BASE = 4; var ElevationBehaviorMode = {}; ElevationBehaviorMode.EB_REPLACE = 0; ElevationBehaviorMode.EB_BELOW = 1; ElevationBehaviorMode.EB_ABOVE = 2; var EditItemFlags = {}; EditItemFlags.EDIT_ITEM_USE_PROPERTY = 0; EditItemFlags.EDIT_ITEM = 1; EditItemFlags.EDIT_ITEM_VERTICES = 2; EditItemFlags.EDIT_ITEM_BUILDING_ROOF = 3; var ItemCode = {}; ItemCode.SELECTED = 10; ItemCode.CHILD = 11; ItemCode.FIRSTVISIBLE = 12; ItemCode.NEXT = 13; ItemCode.NEXTVISIBLE = 14; ItemCode.PARENT = 15; ItemCode.PREVIOUS = 16; ItemCode.PREVIOUSVISIBLE = 17; ItemCode.ROOT = 18; var SortType = {}; SortType.SORT_ALPHABETICALLY_AZ = 0; SortType.SORT_ALPHABETICALLY_ZA = 1; SortType.SORT_BY_TYPE = 2; SortType.SORT_NO_SORT = 3; var WorldPointType = {}; WorldPointType.WPT_MODEL = 1; WorldPointType.WPT_LABEL = 2; WorldPointType.WPT_PRIMITIVE = 4; WorldPointType.WPT_ANIM = 8; WorldPointType.WPT_BUILDING = 16; WorldPointType.WPT_SKY = 32; WorldPointType.WPT_ACCURATE_CPT = 64; WorldPointType.WPT_BBOX_CPT = 128; WorldPointType.WPT_VIDEO = 256; WorldPointType.WPT_UNDERGROUND = 512; WorldPointType.WPT_SCREEN_OVERLAY = 1024; WorldPointType.WPT_SCREEN_CONTROL = 2048; WorldPointType.WPT_SCREEN_COVERED = 4096; WorldPointType.WPT_ALL = -1; var MouseInputMode = {}; MouseInputMode.MI_FREE_FLIGHT = 0; MouseInputMode.MI_COM_CLIENT = 1; MouseInputMode.MI_CONTROLLED_FLIGHT = 2; MouseInputMode.MI_EDIT = 3; MouseInputMode.MI_MEASURAMENT = 4; var MessageBarTextAlignment = {}; MessageBarTextAlignment.MBT_LEFT = 0; MessageBarTextAlignment.MBT_CENTER = 1; MessageBarTextAlignment.MBT_RIGHT = 2; var AccuracyLevel = {}; AccuracyLevel.ACCURACY_NORMAL = 0; AccuracyLevel.ACCURACY_BEST_FROM_MEMORY = 1; AccuracyLevel.ACCURACY_BEST_FROM_MPT = 2; var PermissionType = {}; PermissionType.LMP_ENABLE_ALL = 0; PermissionType.LMP_DISABLE_API = 1; PermissionType.LMP_DISABLE_UI = 2; PermissionType.LMP_DISABLE_ALL = -1; var SliderDisplayMode = {}; SliderDisplayMode.MODE_TIME_NONE = 0; SliderDisplayMode.MODE_FIXED_TIME = 1; SliderDisplayMode.MODE_TIME = 2; SliderDisplayMode.MODE_RANGE_PROJECT = 4; SliderDisplayMode.MODE_RANGE_CUSTOM = 8; SliderDisplayMode.MODE_ADJUST_FOR_GROUP = 16; var TimeZoneType = {}; TimeZoneType.TIME_ZONE_TYPE_MY_COMPUTER = 0; TimeZoneType.TIME_ZONE_TYPE_UTC = 1; TimeZoneType.TIME_ZONE_TYPE_SPECIFIC = 2; var TEVesrionType = {}; TEVesrionType.TEVT_PRO = 0; TEVesrionType.TEVT_PLUS = 1; TEVesrionType.TEVT_VIEWER = 2; TEVesrionType.TEVT_UNKNOWN = -1; var ObjectTypeCode = {}; ObjectTypeCode.OT_UNDEFINED = 0; ObjectTypeCode.OT_POLYLINE = 1; ObjectTypeCode.OT_POLYGON = 2; ObjectTypeCode.OT_RECTANGLE = 3; ObjectTypeCode.OT_REGULAR_POLYGON = 4; ObjectTypeCode.OT_CIRCLE = 5; ObjectTypeCode.OT_3D_POLYGON = 6; ObjectTypeCode.OT_BUILDING = 7; ObjectTypeCode.OT_BOX = 8; ObjectTypeCode.OT_PYRAMID = 9; ObjectTypeCode.OT_CYLINDER = 10; ObjectTypeCode.OT_CONE = 11; ObjectTypeCode.OT_ELLIPSE = 12; ObjectTypeCode.OT_ARC = 13; ObjectTypeCode.OT_ARROW = 14; ObjectTypeCode.OT_3D_ARROW = 15; ObjectTypeCode.OT_SPHERE = 16; ObjectTypeCode.OT_MODEL = 17; ObjectTypeCode.OT_LABEL = 18; ObjectTypeCode.OT_LOCATION = 19; ObjectTypeCode.OT_TREE_HOTLINK = 20; ObjectTypeCode.OT_ROUTE = 21; ObjectTypeCode.OT_MESSAGE = 22; ObjectTypeCode.OT_DYNAMIC = 23; ObjectTypeCode.OT_IMAGE_LABEL = 24; ObjectTypeCode.OT_THREAT_DOME = 25; ObjectTypeCode.OT_IMAGERY_LAYER = 26; ObjectTypeCode.OT_TERRAIN_VIDEO = 27; ObjectTypeCode.OT_POINT_CLOUD = 28; ObjectTypeCode.OT_ELEVATION_LAYER = 29; ObjectTypeCode.OT_TERRAIN_MODIFIER = 30; ObjectTypeCode.OT_TERRAIN_HOLE = 31; ObjectTypeCode.OT_POPUP_MESSAGE = 32; ObjectTypeCode.OT_FEATURE = 33; ObjectTypeCode.OT_PRESENTATION = 34; ObjectTypeCode.OT_ANALYSIS_LOS = 35; var SGGeometryTypeId = {}; SGGeometryTypeId.SG_POINT = 0; SGGeometryTypeId.SG_LINESTRING = 1; SGGeometryTypeId.SG_LINEARRING = 2; SGGeometryTypeId.SG_POLYGON = 3; SGGeometryTypeId.SG_MULTIPOINT = 4; SGGeometryTypeId.SG_MULTILINESTRING = 5; SGGeometryTypeId.SG_MULTIPOLYGON = 6; var BuildingStyleCode = {}; BuildingStyleCode.BS_STRETCH_TERRAIN = 0; BuildingStyleCode.BS_POLYGONS = 1; var IntersectionType = {}; IntersectionType.IT_NONE = 0; IntersectionType.IT_INTERSECT = 1; IntersectionType.IT_WITHIN = 2; var StreamLayerStatus = {}; StreamLayerStatus.SLS_NOT_STREAMED_LAYER = 0; StreamLayerStatus.SLS_STREAMING = 1; StreamLayerStatus.SLS_STREAM_PAUSED = 2; var AltitudeUnitCode = {}; AltitudeUnitCode.AU_METER = 0; AltitudeUnitCode.AU_FEET = 1; AltitudeUnitCode.AU_CENTIMETER = 2; AltitudeUnitCode.AU_DECIMETER = 3; AltitudeUnitCode.AU_INCHE = 4; AltitudeUnitCode.AU_YARD = 5; AltitudeUnitCode.AU_UNDEFINED = -1; var LabelLockMode = {}; LabelLockMode.LM_DECAL = 0; LabelLockMode.LM_AXIS = 1; LabelLockMode.LM_AXIS_TEXTUP = 2; LabelLockMode.LM_AXIS_AUTOPITCH = 3; LabelLockMode.LM_AXIS_AUTOPITCH_TEXTUP = 4; var DistributionDir = {}; DistributionDir.DOWN_UP = 0; DistributionDir.UP_DOWN = 1; DistributionDir.RIGHT_LEFT = 2; DistributionDir.LEFT_RIGHT = 3; DistributionDir.FRONT_BACK = 4; DistributionDir.BACK_FRONT = 5; var CPTDataFormat = {}; CPTDataFormat.CPT_DF_INTENSITY = 0; CPTDataFormat.CPT_DF_RGB = 1; var _HTML_POPUP_FLAGS = {}; _HTML_POPUP_FLAGS.HTML_POPUP_NONE = 0; _HTML_POPUP_FLAGS.HTML_POPUP_ANCHOR_3D_WINDOW = 1; _HTML_POPUP_FLAGS.HTML_POPUP_ALLOW_DRAG = 2; _HTML_POPUP_FLAGS.HTML_POPUP_NO_CAPTION = 4; _HTML_POPUP_FLAGS.HTML_POPUP_USE_DEFAULT_POS = 8; _HTML_POPUP_FLAGS.HTML_POPUP_USE_LAST_SIZE = 16; _HTML_POPUP_FLAGS.HTML_POPUP_ALLOW_RESIZE = 32; _HTML_POPUP_FLAGS.HTML_POPUP_ADD_SHADOW = 64; _HTML_POPUP_FLAGS.HTML_POPUP_NO_BORDER = 128; _HTML_POPUP_FLAGS.HTML_POPUP_SET_FOCUS_TO_RENDER = 256; _HTML_POPUP_FLAGS.HTML_POPUP_NOT_USE_POINTER = 512; _HTML_POPUP_FLAGS.HTML_POPUP_ALWAYS_VISIBLE = 1024; _HTML_POPUP_FLAGS.HTML_POPUP_USE_LAST_POS = 2048; _HTML_POPUP_FLAGS.HTML_POPUP_USE_TEXT_AS_INNER_HTML = 4096; var PresentationStepContinue = {}; PresentationStepContinue.PSC_MOUSECLICK = 0; PresentationStepContinue.PSC_WAIT = 1; var PresentationStepFlightSpeed = {}; PresentationStepFlightSpeed.PSFS_VERYSLOW = 0; PresentationStepFlightSpeed.PSFS_SLOW = 1; PresentationStepFlightSpeed.PSFS_NORMAL = 2; PresentationStepFlightSpeed.PSFS_FAST = 3; PresentationStepFlightSpeed.PSFS_VERYFAST = 4; var PresentationPlayAlgorithm = {}; PresentationPlayAlgorithm.PPA_FLYTO = 0; PresentationPlayAlgorithm.PPA_SPLINE = 1; var PresentationPlayMode = {}; PresentationPlayMode.PPM_AUTOMATIC = 0; PresentationPlayMode.PPM_MANUAL = 1; var PresentationCaptionSizeType = {}; PresentationCaptionSizeType.PCST_FIXED = 0; PresentationCaptionSizeType.PCST_AUTOMATICALLYADJUST = 1; var PresentationCaptionPosition = {}; PresentationCaptionPosition.PCP_TOPLEFT = 0; PresentationCaptionPosition.PCP_TOPCENTER = 1; PresentationCaptionPosition.PCP_TOPRIGHT = 2; PresentationCaptionPosition.PCP_BOTTOMLEFT = 3; PresentationCaptionPosition.PCP_BOTTOMCENTER = 4; PresentationCaptionPosition.PCP_BOTTOMRIGHT = 5; var PresentationStatus = {}; PresentationStatus.PS_PLAYING = 0; PresentationStatus.PS_NOTPLAYING = 1; PresentationStatus.PS_PAUSED = 2; PresentationStatus.PS_WAITINGTIME = 3; PresentationStatus.PS_WAITINGCLICK = 4; var VideoPlayStatus = {}; VideoPlayStatus.VPS_PAUSE = 0; VideoPlayStatus.VPS_PLAY = 1; VideoPlayStatus.VPS_STOP = 2; var ContainerSite = {}; ContainerSite.CS_DOCK_LEFT = 0; ContainerSite.CS_DOCK_RIGHT = 1; ContainerSite.CS_DOCK_TOP = 2; ContainerSite.CS_DOCK_BOTTOM = 3; ContainerSite.CS_DOCK_FLOAT = 4; ContainerSite.CS_MAIN = 5; ContainerSite.CS_NOT_VALID = -1; var FaceFillTypeCode = {}; FaceFillTypeCode.FACE_COLOR = 0; FaceFillTypeCode.FACE_TEXTURE = 1; FaceFillTypeCode.FACE_TERRAIN_TEXTURE = 2; FaceFillTypeCode.FACE_UNDEFINED = -1; var RoofStyleCode = {}; RoofStyleCode.ROOFTOP_FLAT = 0; RoofStyleCode.ROOFTOP_ANGULAR = 1; var PresentationStepType = {}; PresentationStepType.ST_LOCATION = 0; PresentationStepType.ST_DYNAMICOBJECT = 1; PresentationStepType.ST_GROUPOROBJECT = 2; PresentationStepType.ST_UNDERGROUNDMODE = 3; PresentationStepType.ST_TIMESLIDER = 4; PresentationStepType.ST_CURRENTTIME = 5; PresentationStepType.ST_MESSAGE = 6; PresentationStepType.ST_TOOL = 7; PresentationStepType.ST_CAPTION = 8; PresentationStepType.ST_RESTARTDYNAMICOBJECT = 9; PresentationStepType.ST_FLIGHTSPEEDFACTOR = 10; PresentationStepType.ST_CLEARCAPTION = -1; var TilingMethodCode = {}; TilingMethodCode.TM_TILES_PER_SIDE = 0; TilingMethodCode.TM_TILES_PER_AXIS = 0; TilingMethodCode.TM_METERS_PER_TILE = 1; TilingMethodCode.TM_UNDEFINED = -1; var AttributeTypeCode = {}; AttributeTypeCode.AT_TEXT = 0; AttributeTypeCode.AT_INTEGER = 1; AttributeTypeCode.AT_DOUBLE = 2; AttributeTypeCode.AT_UNKNOWN = -1; var FeatureState = {}; FeatureState.FS_NONE = 0; FeatureState.FS_NEW = 1; FeatureState.FS_MODIFIED = 2; FeatureState.FS_DELETED = 3;

SGLang = {
    lang : {},
    /** 
     * APIProperty: defaultCode
     * {String} Default language to use when a specific language can't be
     *     found.  Default is "en".
     */
    defaultCode: "0",
        
    /**
     * APIFunction: getCode
     * Get the current language code.
     *
     * Returns:
     * The current language code.
     */
    getCode: function() {
		var lang = SGLang.getUrlParameters()["lang"];
		if(!lang)
			lang = SGLang.defaultCode;
		return lang;
    },
    
	getUrlParameters: function()
	{
	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split(/&|\?/ig);
	    for(var i = 0; i < hashes.length; i++)
	    {
	        hash = hashes[i].split('=');
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }
	    return vars;
	},

    /**
     * APIMethod: translate
     * Looks up a key from a dictionary based on the current language string.
     *     The value of <getCode> will be used to determine the appropriate
     *     dictionary.  Dictionaries are stored in <SGLang>.
     *
     * Parameters:
     * key - {String} The key for an i18n string value in the dictionary.
     * context - {Object} Optional context to be used with
     *     <SGAPI.String.format>.
     * 
     * Returns:
     * {String} A internationalized string.
     */
    i18n: function(key, context) {
        var message = SGLang.lang[key];
        if(!message) {
			// Message not found, fall back to message key
			message = key;
        }
        if(context) {
            message = SGLang.format(message, context);
        }
        return message;
    },
	
	i18nFile: function(file) {
		var code = this.getCode();
		if(code == "0" || code == "1033")
			return file;
        return code + "/" + file;
    },
	
    format: function(template, context, args) {
        if(!context) {
            context = window;
        }

        // Example matching: 
        // str   = ${foo.bar}
        // match = foo.bar
        var replacer = function(str, match) {
            var replacement;

            // Loop through all subs. Example: ${a.b.c}
            // 0 -> replacement = context[a];
            // 1 -> replacement = context[a][b];
            // 2 -> replacement = context[a][b][c];
            var subs = match.split(/\.+/);
            for (var i=0; i< subs.length; i++) {
                if (i == 0) {
                    replacement = context;
                }

                replacement = replacement[subs[i]];
            }

            if(typeof replacement == "function") {
                replacement = args ?
                    replacement.apply(null, args) :
                    replacement();
            }

            // If replacement is undefined, return the string 'undefined'.
            // This is a workaround for a bugs in browsers not properly 
            // dealing with non-participating groups in regular expressions:
            // http://blog.stevenlevithan.com/archives/npcg-javascript
            if (typeof replacement == 'undefined') {
                return 'undefined';
            } else {
                return replacement; 
            }
        };

        return template.replace(SGLang.tokenRegEx, replacer);
    },

    /**
     * Property: SGLang.tokenRegEx
     * Used to find tokens in a string.
     * Examples: ${a}, ${a.b.c}, ${a-b}, ${5}
     */
    tokenRegEx:  /\$\{([\w.]+?)\}/g
};

//-------------------
// load requested lang file
(function() {
    // document.write("<script language='javascript' src='Lang.js'></script>");
	// var code = SGLang.getCode();
    // document.write("<script  language='javascript' src='" + code + "/Lang.js'></script>");

    var head = document.head || document.getElementsByTagName("head")[0];

    // New way to support IE10
    firstScript = head.getElementsByTagName("script")[0];

    var script = document.createElement("script");
    script.setAttribute("src", "Lang.js");
    head.insertBefore(script, firstScript);

    var code = SGLang.getCode();

    var script2 = document.createElement("script");
    script2.setAttribute("src", code + "/Lang.js");
    head.insertBefore(script2, firstScript);    
})();

// hide document body, so that TextXXX won't be visible until we replace them on document ready
$(document.body).hide();
//-------------------
$(document).ready(function ()
{
    $(document.body).hide();
	var translateDocument = function() 
	{
	    document.title = SGLang.i18n(document.title);
	    $(".i18n").each(function ()
	    {
	        if (this.tagName == "INPUT")
	        {
	            this.value = SGLang.i18n(this.value);
	        }
	        else if (this.tagName == "IMG")
	        {
	            $(this).attr("src",SGLang.i18n($(this).attr("src")));
	            $(this).attr("alt", SGLang.i18n($(this).attr("alt")));
	            $(this).attr("title", SGLang.i18n($(this).attr("title")));
	        }
	        else
	        {
	            $(this).attr("title", SGLang.i18n($(this).attr("title")));
	            $(this).attr("alt", SGLang.i18n($(this).attr("alt")));
	            // set element html only if it does not contain any other html elements.
	            // otherwise it will erase them.
	            if ($(this).children().length == 0)
	            {
	                $(this).html(SGLang.i18n($.trim($(this).text())));
	            }
	        }
	    });
	    $(".i18nFile").each(function ()
	    {
	        if (this.tagName == "IMG")
	        {
	            $(this).attr("src",SGLang.i18nFile($(this).attr("src")));
	        }
	    });
	    $(document.body).show();
	}
	// make sure that hiding document body really worked.
	// I am not sure if IE will update the document view, until the function has finished executing.
	// so I am giving it here a few milliseconds of unused time.
	setTimeout(translateDocument,1);
});

$(document).ready(function ()
{
    if (GetParamValue("inSG","") == "1")
    {
        document.getElementById("TopAreaTD").style.height = "57";
        document.getElementById("TitleTD").align = "left";
        document.getElementById("CloseHelpTd").style.display = "none";
    }
});


//-------------------
// DisplayMessagePopup
function DisplayMessagePopup(title, header, icon,body, x, y, width, height, CloseButton) {

    var HTMLString = "<html><head><meta http-equiv=\"X-UA-Compatible\" content=\"IE=9\"/><link rel='StyleSheet' href='" + abspath() + "/../Style.css' type='text/css'></head><body leftmargin='0' topmargin='0' marginwidth='0' marginheight='0'><object id='SGWorld' classid='CLSID:3a4f9197-65a8-11d5-85c1-0001023952c1' style='display:none'></object>";
    HTMLString += "<table width='100%' height='100%' cellpadding=4pt cellspacing=0 border=0> <tr height='20pt'>";
    if (icon != "")
        HTMLString += "<td align='left' width='50pt'><img src='"+icon+"' alt='' ></td>";
    if (header != "")
        HTMLString += "<td align='middle'><span class='s12b'>" + header + "</span></td>";
    HTMLString += "<td width='50pt'></td></tr><tr><td valign='top' colspan=3><span class='s9'>" + body + "</span></td></tr>";
    if (CloseButton)
        HTMLString += "<tr><td align='right' valign=bottom colspan=3 style='background-color:#eeeeee'><input type='button' class='MenuButtonSmall' value='Close' onClick='SGWorld.Window.RemovePopupByCaption(\"" + title + "\");' /></td></tr>";
    HTMLString += "</body></html>";
    var popupMsg = SGWorld.Creator.CreatePopupMessage(title, "", x, y, width, height, -1);
    popupMsg.Flags = 2 + 32 + 32768;
    popupMsg.InnerText = HTMLString;
    SGWorld.Window.ShowPopup(popupMsg);        

}
//-------------------
// TEAlert
function TEAlert(caption, text,info) {
    var icon;
    if (info==true)
        icon=abspath() + "/../commonimg/info.png";
    else
        icon=abspath() + "/../commonimg/alert.png";
    DisplayMessagePopup(caption, "",icon,text, (SGWorld.Window.Rect.Width)/2-200, (SGWorld.Window.Rect.Height)/2-75, 400, 150, true);
    
}

//-------------------
// DisplayHelpPopup6
function DisplayHelpPopup6(HTMLSrc, title) {
    if (title == null || title == "")
        title = "?";
    var popup = SGWorld.Creator.CreatePopupMessage(title, abspath() + "/" + HTMLSrc, 5, 5, 850, 500);
    popup.AllowDrag = true;
    popup.AllowResize = true;
    SGWorld.Window.ShowPopup(popup);        
    
}
//-------------------
// CloseTool
function CloseTool (ToolName)
{
	var Cont = TE.interface("IContainer2");
	Cont.RemoveURL (1,ToolName);
}

//--------------
// abspath
function abspath()
{
    var abspath = unescape(window.location.href);

    // Remove query String 
    var index=abspath.indexOf("?");
    if (index > 0) abspath = abspath.substr (0,index-1);    
        
    index=abspath.lastIndexOf("/");
    var index2 = abspath.lastIndexOf("\\");
    
    index = (index > index2) ? index : index2;
    if (index <= 0) return abspath;

    abspath = abspath.substring(0,index);

    if(abspath.substring(0,1) == "/") abspath = abspath.slice(1);    

    var re = /file:\/\/\//gi;
    if (abspath.match(re) != null) abspath = abspath.replace(re,""); // if this is indeed a local file, we strip the "file://" prefix from it.    

    return(abspath);
}
// GetParamValue
function GetParamValue(findParam, defaultValue) 
{
    var arr = document.location.href.split("?");
    if (arr.length <= 1) return defaultValue;
    arr = arr[1].split("&");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(findParam) == 0 && arr[i].indexOf("=") == findParam.length) {
            arr = arr[i].split("=");
            return arr[1];
        }
    }
    return defaultValue;
}  
//-----------------
// validateNumber
function validateNumber(strNum)
{
    strNum =     strNum.replace(/,/, ".");
    return parseFloat (strNum);
}
//--------------
// validateNumberEx
function validateNumberEx(field, defVal, MinNum, MaxNum) {
    try {
        field.val (validateNumber(field.val()));

        if (field.val() < MinNum)
            field.val(MinNum);
        if (field.val() > MaxNum)
            field.val( MaxNum);
    }
    catch (e) {field.val(defVal); }
}
//--------------
// CheckNumberEx
function CheckNumberEx(field, defVal, MinNum, MaxNum) {
    try {
        if (isNaN(field.value))
            field.value = defVal;

        if (field.value < MinNum)
            field.value = MinNum;
        if (field.value > MaxNum)
            field.value = MaxNum;
    }
    catch (e) { field.value = defVal }
}

  /**
     * APIMethod: drawing tools
     *
     */

var gDrawingEditMode = 0;

var drawing = {
    drawingEditMode: -1,
    polyObject: null,
    helpLine: null,   // Vertical line in case we select Horizontal Plane and want to see the connection between the cursor and the plane
    drawPolygon: function (options) { drawing_startDrawing (2,options);    },
    drawPolyline: function (options) { drawing_startDrawing (1,options);    },
    //drawPoints: drawing_startDrawing (0,options),
    abort: function (deleteObj) {drawing_finishDrawing(true); }
}

//-------------
//drawing_startDrawing
function drawing_startDrawing(type,options) {
    try {
        drawing.drawingEditMode = type;
        drawing.options = options;

        SGWorld.AttachEvent("OnLButtonClicked", drawing_DrawPolyLButtonClicked);
        SGWorld.AttachEvent("OnRButtonUp", drawing_DrawPolyRButtonUp);
        SGWorld.AttachEvent("OnFrame", drawing_DrawPolyOnFrame);
        SGWorld.AttachEvent("OnInputModeChanged", drawing_DrawPolyInputModeChanged);
        SGWorld.Window.SetInputMode(1, abspath() + "/cursor_m.cur", true);
    }
    catch (err) {if (gDebug) alert(err.message);}
}

//-------------
//drawing_finishDrawing
function drawing_finishDrawing (deleteObject){
    try {
        if (deleteObject && drawing.polyObject != null)
            SGWorld.Creator.DeleteObject(drawing.polyObject.ID);
        if (drawing.helpLine != null)
            SGWorld.Creator.DeleteObject(drawing.helpLine.ID);
            
        drawing.polyObject = null;   
        drawing.helpLine = null;
        drawing.options.onAbort();
    }
    catch (err) {}
    try {
        SGWorld.Window.SetInputMode(0);
        drawing.drawingEditMode = -1;

        SGWorld.DetachEvent("OnLButtonClicked", drawing_DrawPolyLButtonClicked);
        SGWorld.DetachEvent("OnRButtonUp", drawing_DrawPolyRButtonUp);
        SGWorld.DetachEvent("OnFrame", drawing_DrawPolyOnFrame);
        SGWorld.DetachEvent("OnInputModeChanged", drawing_DrawPolyInputModeChanged);
    }
    catch (err) {}

}
//-------------
//drawing_DrawPolyInputModeChanged
function drawing_DrawPolyInputModeChanged(NewMode) {

    if (NewMode != 1)
        if (drawing.drawingEditMode != -1)
            drawing.abort();
}
//----------
// drawing_DrawPolyLButtonDown
function drawing_DrawPolyLButtonDown(Flags, X, Y) {
    drawing_DrawPolyLButtonClicked(Flags, X, Y);
}
//----------
// drawing_DrawPolyLButtonClicked
function drawing_DrawPolyLButtonClicked(Flags, X, Y) {
    try {
        var CursorCoord = SGWorld.Window.pixelToWorld(X, Y, -1 & ~(128 | 1024));

        var altitudeMethod = (typeof drawing.options.altitudeMethod !== "undefined")?drawing.options.altitudeMethod :3;
        var parentGroup = (typeof drawing.options.parentGoupID !== "undefined")?drawing.options.parentGoupID :SGWorld.ProjectTree.HiddenGroupID;

        if (drawing.polyObject == null) {
            // We always start with a polyline and change it to Polygon (for area) after the second click)
            var myGeometry = SGWorld.Creator.GeometryCreator.CreateLineStringGeometry([CursorCoord.Position.x, CursorCoord.Position.y, CursorCoord.Position.Altitude, CursorCoord.Position.x, CursorCoord.Position.y, CursorCoord.Position.Altitude])
            drawing.polyObject = SGWorld.Creator.createPolyline(myGeometry, SGWorld.Creator.CreateColor(0, 255, 0, 1), altitudeMethod, parentGroup, "polyline");
            drawing_StylePoly(drawing.polyObject);
            drawing.polyObject.Geometry.StartEdit();
            if (typeof drawing.options.horizontal !== "undefined" && drawing.options.horizontal==true){
                var myGeometry = SGWorld.Creator.GeometryCreator.CreateLineStringGeometry([0, 0, 0, 0, 0, 0])
                drawing.helpLine = SGWorld.Creator.createPolyline(myGeometry, SGWorld.Creator.CreateColor(0, 255, 0, 1), altitudeMethod, SGWorld.ProjectTree.HiddenGroupID, "helper");
                drawing_StyleHelpLine(drawing.helpLine);
                drawing.helpLine.Geometry.StartEdit();
            }   
            
        }
        else {

            if (drawing.drawingEditMode == 2) // Polygon 
            {
                if (drawing.polyObject.ObjectType == 1) {
                    if (drawing.polyObject.Geometry.Points.Item(0).X == CursorCoord.Position.x &&drawing.polyObject.Geometry.Points.Item(0).Y == CursorCoord.Position.y &&drawing.polyObject.Geometry.Points.Item(0).Z == CursorCoord.Position.Altitude  )
                        return;

                    // Deleting the temporary line
                    var x = drawing.polyObject.Geometry.Points.Item(0).X;
                    var y = drawing.polyObject.Geometry.Points.Item(0).Y;
                    var z = drawing.polyObject.Geometry.Points.Item(0).Z;
                    SGWorld.Creator.DeleteObject(drawing.polyObject.ID);
                    if (typeof drawing.options.horizontal !== "undefined" && drawing.options.horizontal==true)
                        CursorCoord.Position.Altitude = z;

                    // Creating the polygon
                    var myGeometry = SGWorld.Creator.GeometryCreator.CreateLinearRingGeometry([x, y, z, CursorCoord.Position.x, CursorCoord.Position.y, CursorCoord.Position.Altitude, CursorCoord.Position.x, CursorCoord.Position.y, CursorCoord.Position.Altitude]);
                    drawing.polyObject = SGWorld.Creator.createPolygon(myGeometry, SGWorld.Creator.CreateColor(0, 255, 0, 1), SGWorld.Creator.CreateColor(0, 255, 0, 0.5), altitudeMethod, parentGroup, "polygon");
                    drawing_StylePoly(drawing.polyObject);
                    drawing.polyObject.Geometry.StartEdit();
                }
                else {
                    drawing.polyObject.Geometry.Rings(0).Points.Item(drawing.polyObject.Geometry.Rings(0).Points.count - 1).X = CursorCoord.Position.x;
                    drawing.polyObject.Geometry.Rings(0).Points.Item(drawing.polyObject.Geometry.Rings(0).Points.count - 1).Y = CursorCoord.Position.y;
                    drawing.polyObject.Geometry.Rings(0).Points.Item(drawing.polyObject.Geometry.Rings(0).Points.count - 1).Z = CursorCoord.Position.Altitude;
                    if (typeof drawing.options.horizontal !== "undefined" && drawing.options.horizontal==true)
                        drawing.polyObject.Geometry.Rings(0).Points.Item(drawing.polyObject.Geometry.Rings(0).Points.count - 1).Z = drawing.polyObject.Geometry.Rings(0).Points.Item(0).Z;
                    drawing.polyObject.Geometry.Rings(0).Points.AddPoint(CursorCoord.Position.x, CursorCoord.Position.y, CursorCoord.Position.Altitude);
                }
            }
            else {  // Polyline
                drawing.polyObject.Geometry.Points.Item(drawing.polyObject.Geometry.Points.count - 1).X = CursorCoord.Position.x;
                drawing.polyObject.Geometry.Points.Item(drawing.polyObject.Geometry.Points.count - 1).Y = CursorCoord.Position.y;
                drawing.polyObject.Geometry.Points.Item(drawing.polyObject.Geometry.Points.count - 1).Z = CursorCoord.Position.Altitude;
                if (typeof drawing.options.horizontal !== "undefined" && drawing.options.horizontal==true)
                    drawing.polyObject.Geometry.Points.Item(drawing.polyObject.Geometry.Points.count - 1).Z = drawing.polyObject.Geometry.Points.Item(0).Z;
                drawing.polyObject.Geometry.Points.AddPoint(CursorCoord.Position.x, CursorCoord.Position.y, CursorCoord.Position.Altitude);
            }
        }

        if (typeof drawing.options.onAddPoint !== "undefined")
            drawing.options.onAddPoint(drawing.polyObject.Geometry, drawing.polyObject.ObjectType, drawing.polyObject.Position.AltitudeType);

        drawing.polyObject.SetParam(5440, 1);
    }
    catch (err) {if (gDebug) alert(err.message);}

    return false;
}

//-----------
// drawing_StylePoly
function drawing_StylePoly (poly){
    try {
            // Line style
            poly.LineStyle.Width = (typeof drawing.options.style.lineWidth !== "undefined")?drawing.options.style.lineWidth*(-1):-2;
            poly.LineStyle.Color.fromHTMLColor((typeof drawing.options.style.lineColor !== "undefined")?drawing.options.style.lineColor :"#ffffff");
            poly.LineStyle.Color.SetAlpha((typeof drawing.options.style.lineOpacity !== "undefined")?drawing.options.style.lineOpacity :1);
            poly.LineStyle.Pattern =  (typeof drawing.options.style.linePattern !== "undefined")?drawing.options.style.linePattern :0xffffffff;
            // Line back color
            poly.LineStyle.BackColor.fromHTMLColor((typeof drawing.options.style.lineBackColor !== "undefined")?drawing.options.style.lineBackColor :"#000000");
            poly.LineStyle.BackColor.SetAlpha((typeof drawing.options.style.lineBackOpacity !== "undefined")?drawing.options.style.lineBackOpacity :0);
            //  Fill style
            poly.FillStyle.Color.fromHTMLColor((typeof drawing.options.style.fillColor !== "undefined")?drawing.options.style.fillColor :"#ffffff");
            poly.FillStyle.Color.SetAlpha((typeof drawing.options.style.fillOpacity !== "undefined")?drawing.options.style.fillOpacity :0);
            // Generic style
            poly.SaveInFlyFile = (typeof drawing.options.saveOnExit !== "undefined")?drawing.options.saveOnExit :false;

        }
        catch (err) {if (gDebug) alert(err.message);}
}
//-----------
// drawing_StyleHelpLine
function drawing_StyleHelpLine (poly){
    try {
            poly.LineStyle.Width = -2;
            poly.LineStyle.Color.fromHTMLColor("#ffff00");
            poly.LineStyle.Pattern =  0xaaaaaaaa;
            poly.SaveInFlyFile = false;

        }
        catch (err) {if (gDebug) alert(err.message);}
}

//-----------
// onFrame
function drawing_DrawPolyOnFrame() {
    if (drawing.polyObject != null) {

        try {
            var mouseInfo = SGWorld.Window.GetMouseInfo()
            var CursorCoord = SGWorld.Window.pixelToWorld(mouseInfo.X, mouseInfo.Y, -1 & ~(128|1024));
            if (CursorCoord == null)
                return false;
            if (drawing.polyObject.ObjectType == 2) {
                drawing.polyObject.Geometry.Rings(0).Points.Item(drawing.polyObject.Geometry.Rings(0).Points.count - 1).X = CursorCoord.Position.x;
                drawing.polyObject.Geometry.Rings(0).Points.Item(drawing.polyObject.Geometry.Rings(0).Points.count - 1).Y = CursorCoord.Position.y;
                drawing.polyObject.Geometry.Rings(0).Points.Item(drawing.polyObject.Geometry.Rings(0).Points.count - 1).Z = CursorCoord.Position.Altitude;
                if (typeof drawing.options.horizontal !== "undefined" && drawing.options.horizontal==true)
                    drawing.polyObject.Geometry.Rings(0).Points.Item(drawing.polyObject.Geometry.Rings(0).Points.count - 1).Z = drawing.polyObject.Geometry.Rings(0).Points.Item(0).Z;

            }
            else {
                drawing.polyObject.Geometry.Points.Item(drawing.polyObject.Geometry.Points.count - 1).X = CursorCoord.Position.x;
                drawing.polyObject.Geometry.Points.Item(drawing.polyObject.Geometry.Points.count - 1).Y = CursorCoord.Position.y;
                drawing.polyObject.Geometry.Points.Item(drawing.polyObject.Geometry.Points.count - 1).Z = CursorCoord.Position.Altitude;
                if (typeof drawing.options.horizontal !== "undefined" && drawing.options.horizontal==true)
                    drawing.polyObject.Geometry.Points.Item(drawing.polyObject.Geometry.Points.count - 1).Z = drawing.polyObject.Geometry.Points.Item(0).Z;
            }
            drawing.polyObject.SetParam(5440, 1);

            if (typeof drawing.options.horizontal !== "undefined" && drawing.options.horizontal==true && drawing.helpLine!= null){
                drawing.helpLine.Geometry.Points.Item(0).X = CursorCoord.Position.x;
                drawing.helpLine.Geometry.Points.Item(0).Y = CursorCoord.Position.y;
                drawing.helpLine.Geometry.Points.Item(0).Z = CursorCoord.Position.Altitude;
                drawing.helpLine.Geometry.Points.Item(1).X = CursorCoord.Position.x;
                drawing.helpLine.Geometry.Points.Item(1).Y = CursorCoord.Position.y;
                drawing.helpLine.Geometry.Points.Item(1).Z = drawing.polyObject.Geometry.Points.Item(0).Z;
            }
        }
        catch (e) { }
    }
}
//-------------
// drawing_DrawPolyRButtonUp
function drawing_DrawPolyRButtonUp(Flags, X, Y) {
    var deleteWhenExit = (typeof drawing.options.deleteWhenExit !== "undefined")?drawing.options.deleteWhenExit :true;
    if (drawing.polyObject == null || ((drawing.polyObject.ObjectType == 1 && drawing.polyObject.Geometry.Points.count <= 2) || (drawing.polyObject.ObjectType == 2 && drawing.polyObject.Geometry.Rings(0).Points.count <= 3))) {
        drawing_finishDrawing(deleteWhenExit);
        return false;
    }
    if (drawing.polyObject.ObjectType == 1)
        drawing.polyObject.Geometry.Points.DeletePoint(drawing.polyObject.Geometry.Points.count - 1);
    else
        drawing.polyObject.Geometry.Rings(0).Points.DeletePoint(drawing.polyObject.Geometry.Rings(0).Points.count - 1);

    drawing.polyObject.Geometry.EndEdit();

    drawing.options.onFinish(drawing.polyObject.Geometry, drawing.polyObject.ObjectType, drawing.polyObject.Position.AltitudeType, drawing.polyObject.ID, null); 
    drawing_finishDrawing (deleteWhenExit);
    return true;
}
//-------------------
//searchGeometries
function searchGeometries2(parentNode, callbackFunc, withAtt/*navon added this*/) {
   
    SGWorld.ProjectTree.EnableRedraw(0);
    searchGeometriesLeaf2(parentNode, callbackFunc, withAtt);
    SGWorld.ProjectTree.EnableRedraw(1);
}
//-------------------
// searchGeometries
function searchGeometriesLeaf2(parentNode, callbackFunc, withAtt/*navon added this*/) { 

    if (SGWorld.ProjectTree.IsLayer(parentNode))  // Layer
    {
        var layer = SGWorld.ProjectTree.GetLayer(parentNode);
        var featureGroups = layer.FeatureGroups;
        for (var i = 0; i < featureGroups.Count; i++) // Traverse all sub-layers
        {
            
            var featureGroup = featureGroups.Item(i);
            var altitudeType = AltitudeMethodToAltitudeType(featureGroup.GetProperty("Altitude Method"));
            var features = featureGroup.Features;
            var attributes = layer.DataSourceInfo.Attributes;///navon added this
            
            for (var j = 0; j < features.Count; j++) {
                var ret;
                if (featureGroup.GeometryType != 0){
                    if(features.Item(j).Geometry.GeometryType==5 || features.Item(j).Geometry.GeometryType==6)
                    {
                        for(var k=0;k<features.Item(j).Geometry.Count;k++)
                            ret = callbackFunc(features.Item(j).Geometry.Item(k), featureGroup.GeometryType, altitudeType, features(j), attributes);                        
                    }
                    else
                        ret = callbackFunc(features.Item(j).Geometry, featureGroup.GeometryType, altitudeType, features(j), attributes);                    
                }
                else {
                    if (features.Item(j).Geometry.GeometryType == 0) // Point
                    {
                        var position = SGWorld.Creator.CreatePosition(features.Item(j).Geometry.X, features.Item(j).Geometry.Y, features.Item(j).Geometry.Z);
                        ret = callbackFunc(position, featureGroup.GeometryType, altitudeType);
                    }
                }
                if (!ret)
                    return;
            }
        }
    }
    else {
        var node = SGWorld.ProjectTree.GetNextItem(parentNode, 11);
        while (node != "") {
            if (SGWorld.ProjectTree.IsGroup(node) || SGWorld.ProjectTree.IsLayer(node))
                searchGeometriesLeaf2(node, callbackFunc);
            else {
                var Object = SGWorld.Creator.GetObject(node);
                if (Object != null) {
                    var altitudeType = Object.Position.AltitudeType;
                    var ret;
                    if (Object.ObjectType == 1 || Object.ObjectType == 2){
                        if(Object.Geometry.GeometryType==5 || Object.Geometry.GeometryType==6)
                        {
                            for(var j=0;j<Object.Geometry.Count;j++)
                                ret = callbackFunc(Object.Geometry.Item(j), Object.ObjectType, altitudeType, Object.Position);                        
                        }
                        else
                            ret = callbackFunc(Object.Geometry, Object.ObjectType, altitudeType, Object.Position);
                    }
                    else
                        ret = callbackFunc(Object.Position, Object.ObjectType, altitudeType, Object.Position);

                    if (!ret)
                        return;
                }
            }

            node = SGWorld.ProjectTree.GetNextItem(node, 13);
        }
    }
}

//-------------------
//AltitudeMethodToAltitudeType
function AltitudeMethodToAltitudeType(altitudeMethod)
{
	switch(altitudeMethod)
	{
		case 10: return AltitudeTypeCode.ATC_TERRAIN_RELATIVE;
		case 11: return AltitudeTypeCode.ATC_TERRAIN_ABSOLUTE;
		case 12: return AltitudeTypeCode.ATC_ON_TERRAIN;
		case 13: return AltitudeTypeCode.ATC_PIVOT_RELATIVE;
	}
}
//-------------------
//searchGeometriesClipbaord
function searchGeometriesClipboard(callbackFunc) {
    SGWorld.ProjectTree.EnableRedraw(0);
        var Object;
        for (var i = 0; i < SGWorld.Application.Clipboard.Count; i++) {
            try {
                Object = SGWorld.Application.Clipboard.Item(i);
                var altitudeType = Object.Position.AltitudeType;
                var ret;
                if (Object.ObjectType == 1 || Object.ObjectType == 2)
                {
                    if(Object.Geometry.GeometryType==5 || Object.Geometry.GeometryType==6)
                        {
                            for(var j=0;j<Object.Geometry.Count;j++)
                                ret = callbackFunc(Object.Geometry.Item(j), Object.ObjectType, altitudeType, Object.Position, null, null);                        
                        }
                        else
                            ret = callbackFunc(Object.Geometry, Object.ObjectType, altitudeType, Object.Position, null, null);
                }
                else
                    ret = callbackFunc(Object.Position, Object.ObjectType, altitudeType, Object.Position, null, null);
                if (!ret) {
                    SGWorld.ProjectTree.EnableRedraw(1);
                    return;
                }
            }
            catch (e) { }
          }
    SGWorld.ProjectTree.EnableRedraw(1);
}
//----------------
// GetElevationBuffer
function getElevationBuffer(geometry, resolution){

    try {
        var polygonGeometry = geometry.Clone(); // to enable edit geometry (ref) when geometry type is RelativeToPivot. Navon.
        var envelope = polygonGeometry.Envelope; // Multi polygon evnelope (min/max)
        var MinX = Math.min(envelope.Rings(0).Points(0).x, envelope.Rings(0).Points(2).x);
        var MaxX = Math.max(envelope.Rings(0).Points(0).x, envelope.Rings(0).Points(2).x);
        var MinY = Math.min(envelope.Rings(0).Points(0).y, envelope.Rings(0).Points(2).y);
        var MaxY = Math.max(envelope.Rings(0).Points(0).y, envelope.Rings(0).Points(2).y);

        var stepX = Math.abs(MaxX - MinX) / resolution;
        var stepY = Math.abs(MaxY - MinY) / resolution;

    // For now we call this query several times because of an engine bug!!!
        var elevatuinBuffer = [];
        elevatuinBuffer = SGWorld.Analysis.QueryElevationBuffer(MinX, MaxY, stepX, stepY, resolution, resolution).toArray();  
        elevatuinBuffer = SGWorld.Analysis.QueryElevationBuffer(MinX, MaxY, stepX, stepY, resolution, resolution).toArray();  
        elevatuinBuffer = SGWorld.Analysis.QueryElevationBuffer(MinX, MaxY, stepX, stepY, resolution, resolution).toArray();  
        return elevatuinBuffer;
    }
    catch (e) {return null; }   
}
//-------------------
// BuildObjectsList
function BuildObjectsList(parentNode, list, objectType) {
    try {
        var node = SGWorld.ProjectTree.GetNextItem(parentNode, 11);
        while (node != "") {
            if (!SGWorld.ProjectTree.IsLayer(node)) {
                try{
                    var Object = SGWorld.Creator.GetObject(node);
                    if (Object != null) {
                        if (Object.ObjectType == objectType)
                            list.push(Object.ID); 
                    }
                }
                catch (err){}
                if (SGWorld.ProjectTree.IsGroup(node))
                BuildObjectsList(node, list, objectType);
            }
            else if (objectType==36)
                list.push(node); 
            node = SGWorld.ProjectTree.GetNextItem(node, 13);
        }
    }
    catch (err) {if (gDebug) alert(err.message); }
}
//-------------------
// BuildFoldersList
function BuildFoldersList(parentNode, list) {
    try {
        var node = SGWorld.ProjectTree.GetNextItem(parentNode, 11);
        while (node != "") {
            if (SGWorld.ProjectTree.IsGroup(node)){
                list.push(node); 
                BuildFoldersList(node, list);
            }
            node = SGWorld.ProjectTree.GetNextItem(node, 13);
        }
    }
    catch (err) {if (gDebug) alert(err.message); }
}
//-------------
function getFuncName (callee) {
    return  callee.toString().match(/^function\s+([^(]+)/)[1];
}
    
//-------------
// ScanPolygon
// function scan2DPolygon (geometry, step, callback) {

//     var polygonGeometry = geometry.Clone(); // to enable edit geometry (ref) when geometry type is RelativeToPivot. Navon.
//     var envelope = polygonGeometry.Envelope; // Multi polygon evnelope (min/max)
//     var MinX = Math.min(envelope.Rings(0).Points(0).x, envelope.Rings(0).Points(2).x);
//     var MaxX = Math.max(envelope.Rings(0).Points(0).x, envelope.Rings(0).Points(2).x);
//     var MinY = Math.min(envelope.Rings(0).Points(0).y, envelope.Rings(0).Points(2).y);
//     var MaxY = Math.max(envelope.Rings(0).Points(0).y, envelope.Rings(0).Points(2).y);

//     var currCoord = SGWorld.Creator.CreatePosition(MinX, MinY, 0 , 0, 0);

//     while (currCoord.x < MaxX) {
//         currCoord.y = MinY;
//         while (currCoord.y < MaxY) {
//             var pointGeometry = SGWorld.Creator.GeometryCreator.CreatePointGeometry([currCoord.x, currCoord.y, 0]);
//             if (polygonGeometry.SpatialRelation.Intersects(pointGeometry)) {
//                 var tmpCoord = currCoord.Copy(); // to avoid changes in the CurrCoord value in the DrawObject function
//                 if (callback(tmpCoord) == false)
//                     return false;
//             }
//             currCoord = currCoord.Move(step, 0, 0);
//         }
//         currCoord = currCoord.Move(step, 90, 0);
//     }
//     return true;
// }