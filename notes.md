[Overview](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
[Actual config](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

# Apex domain
- example.com     (no www.prefix)
- recommend to set up www. as well

added domain
should auto secure www version
need CNAME to fix dns
must resolve 
apex=need ALIAS, ANAME or A record or AAA record for ipv5

https://sleekpanther.github.io/
sleekpanther.github.io


what is cname=canonical name 
subdomains like blog.example.com have cnames to point back to root
@ for root
github docs say do this for www version, not apex, 


##I DID THIS VERSION ACCORDING tho this video https://www.youtube.com/watch?v=EX4w9hsduNA
A Record = Address record, indicates ip for domain
a recors=ipv4
aaaa=ipv6
use @ for root, enter 4 ip addresses in VALUE


https://www.cloudflare.com/learning/dns/dns-records/dns-a-record/

3/16/23 2pm configured
no https yet
still no redirect


3/20/23
website works
no SSL certificate

3/20/23
Css grid
grid gaps = gap duh
grid tracks = lines between
must define columns and rows or else display: grid; does nothing
fr = fraction	
grid-auto-rows: 150px;	//applies to extra non template rows
minmax(150, auto);
//Named areas
grid-template-areas: 
	'header header
	';
then
.grid-item-1{
	grid-area: header;
	
	//upper bound exclusive
	grid-column-start: 1;
	grid-column-end: 3;

	//shorthand
	grid-column: 1 / 3;
	//negative numbers are from right end
	//or use span property
	grid-row: span 2;
}

//align grid itself
justify-content: center;	//start, end, 
align-content: center;	//, stretch, space-around	//must specify height

//default is stretch
justify-items: center;	//inside their row/column
align-items: end;	//start

//overridden by individual
align-self: start;
justify-self: end;	

3/20/23
disabled SSL on Sav temporarily
3/21/23
re enabled SSL on Sav
