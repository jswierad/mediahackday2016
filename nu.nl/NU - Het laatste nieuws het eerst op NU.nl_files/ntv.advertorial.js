var ntv = ntv || {};

ntv.insertAd = function(ad){
    // strips HTML from string
    function stripTags(html){
        if(typeof html === 'undefined' || html.length < 1){
            return "";
        }

        var div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || html.replace(/<\/?[^>]+(>|$)/g, "");
    }

    // prevent potential XSS attempts, strip single/double quotes and <> from string.
    function makeSafe(html){
        return html.replace(/["'<>]/, "");
    }

    // enforce maxlength
    function trimText(text, maxlength){
        if(typeof maxlength != 'number' || typeof text != 'string' || text.length < maxlength){
            return text;
        } else {
            // replace last char for ... if last char is a word char. Also, strip trailing whitespace.
            return text.substring(0, maxlength).replace(/[a-z0-9_-]$/i, '&hellip;').replace(/\s+(&hellip;)?$/i, "");
        }
    }
    
    var placement = document.getElementById(ad.target),
        html = [],
        target = document.createElement("div"),
        link_target = ad.link_target || '_blank';

    // build HTML for advert
    html.push('<div class="block-wrapper native"><div class="branded native"><a href="');
    html.push(makeSafe(ad.url));
    html.push('" target="'+link_target+'"><div class="block-title"><h2>Gesponsord</h2></div><div class="block-content"><div class="item-content"><div class="item-image"><img class="wide image" alt="" src="');
    html.push(makeSafe(ad.image_wide.url));
    html.push('" /><img class="std image" alt="" src="');
    html.push(makeSafe(ad.image_square.url));
    html.push('" /></div><div class="item-text"><div class="item-title">');
    html.push(trimText(stripTags(ad.subtitle), 36));
    html.push('</div><div class="item-excerpt">');
    html.push(trimText(stripTags(ad.excerpt_short), 110));
    html.push('</div></div><div class="clear"></div></div></div><div class="block-footer molecule-advertorial-footer"><div class="left-col"><div class="icon nu-branded"></div>Door: <span class="company">')
    html.push(trimText(stripTags(ad.company), 45));
    html.push('</span></div><div class="right-col"><img src="');
    html.push(makeSafe(ad.company_logo));
    html.push('"></div></div><div class="clear"></div></a></div></div>');

    // insert HTML for advert
    target.className = "block brandedcontent";
    target.innerHTML = html.join('');
    target = placement.parentNode.insertBefore(target, placement);

    // hide original target
    document.getElementById(ad.target).style.display = 'none';
};

ntv.noAd = function(target){
    // hide original target - no ad.
    document.getElementById(target).style.display = 'none';
};