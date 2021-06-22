var helpcontent = new Array(5);
var help_enable = '<% nvram_get_x("", "help_enable"); %>';

helpcontent[0] = new Array("",
				"Global Mode: The slowest and the best effects.</br>Plus + Mode: Filter domain name list and blacklist website. Recommended<br>No Filter Mode: Must set in Client Filter Mode Settings manually",);
				
helpcontent[1] = new Array("",
				"1. AGH as defaults upstream server of dnsmasq with the IP address of container are all 127.0.0.1</br>2. Redirect 53 port to AdGuardHome",);

helpcontent[2] = new Array("",
				"This tool uses the domain name resolution layer to block advertisements and protect privacy. It merges and removes the duplicates of the famous hosts, ad filter lists, adblock lists, etc., and then performs a series of abstractions, such as actively removing invalid domain names. , Easylist optimizes fuzzy matching, enhanced black and white list mechanism and other measures to finally generate the expected high hit rate list. It is not recommended to open it at the same time as AD host.",);

function openTooltip(obj, hint_array_id, hint_show_id)
{
	if (help_enable == "0" && hint_show_id > 0)
		return;

	if(hint_array_id >= helpcontent.length)
		return;

	if(hint_show_id >= helpcontent[hint_array_id].length)
		return;

	$j(obj).attr('data-original-title', obj.innerHTML).attr('data-content', helpcontent[hint_array_id][hint_show_id]);
	$j(obj).popover('show');
}
