window.onload=printQuote;
var timer = window.setInterval(printQuote, 7500);
var timerEnabled = true;

//quote data
		var quotes=[
	    {
	    	quote:"\"I’ve said if Ivanka weren’t my daughter, perhaps I’d be dating her.\"",
	    	source:"The View, 2006",
	    	link: "https://www.youtube.com/watch?v=diMp241gAcw"
	    },
	    {
	    	quote:"\"The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.\"",
	    	source:"Twitter, 2012",
	    	link: "https://twitter.com/realdonaldtrump/status/265895292191248385?lang=en"
	    },
	    {
	    	quote:"\"If I decide to run for office, I'll produce my tax returns. Absolutely.\"",
	    	source:"Interview with Ireland AM, 2014",
	    	link: "https://www.youtube.com/watch?v=wtQeb7RHUC4"
	    },
	    {
			quote: "\"Arianna Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man - he made a good decision.\"",
			source:"Twitter, 2012",
			link: "https://twitter.com/realdonaldtrump/status/240462265680289792?lang=en"
	    },
	    {
	    	quote:"\"I have a great relationship with the blacks. I've always had a great relationship with the blacks.\"",
	    	source:"Albany Talk Radio, 2011",
	    	link: "https://www.theatlantic.com/politics/archive/2011/04/donald-trump-i-have-a-great-relationship-with-the-blacks/237332/"
	    },
	    {
	    	quote:"\"I'm intelligent. Some people would say I'm very, very, very intelligent.\"",
	    	source:"Fortune Magazine, 2000",
	    	link: "http://fortune.com/2000/04/03/what-does-donald-trump-really-want/"
	    },
	    {
	    	quote:"\"@mplefty67: If Hillary Clinton can't satisfy her husband what makes her think she can satisfy America?\"",
	    	source:"Twitter, 2015",
	    	link: "https://twitter.com/Lennyjacobson/status/588867303908868096/photo/1"
	    },
	    {
	    	quote:"\"Frederick Douglass is an example of somebody who’s done an amazing job and is getting recognized more and more, I notice.\"",
	    	source:"African-American History Month, 2016",
	    	link: "https://www.washingtonpost.com/news/post-nation/wp/2017/02/02/trump-implied-frederick-douglass-was-alive-the-abolitionists-family-offered-a-history-lesson/"
	    },
	    {
	    	quote:"\"I will build a great wall - and nobody builds walls better than me, believe me - and I'll build them very inexpensively.\"",
	    	source:"Presidential Announcement, 2015",
	    	link: "http://time.com/3923128/donald-trump-announcement-speech/"
	    },
	    {
	    	quote:"\"I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.\"",
	    	source:"Presidential Announcement, 2015",
	    	link: "http://time.com/3923128/donald-trump-announcement-speech/"
	    },
	    {
	    	quote:"\"I'm, like, a smart person.\"",
	    	source:"Fox News, 2016",
	    	link: "http://talkingpointsmemo.com/livewire/trump-makes-bizarre-courtesy-all-at-cia-headquarters"
	    },
	    {
	    	quote:"\"[Being President] is more work than in my previous life. I thought it would be easier.\"",
	    	source:"Reuters, 2017",
	    	link: "http://www.reuters.com/article/us-usa-trump-100days-idUSKBN17U0CA"
	    },
	    {
	    	quote:"\"I think $10 billion or less [for the wall]. And if I do a super-duper, higher, better, better security, everything else, maybe it goes a little bit more.\"",
	    	source: "Associated Press, 2016",
	    	link: "https://www.apnews.com/c810d7de280a47e88848b0ac74690c83"
	    },
	    {
	    	quote:"\"My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.\"",
	    	source: "New York Post, 2011",
	    	link: "http://nypost.com/2011/04/03/trump-card/"
	    },
	    {
	    	quote:"\"You know what uranium is? This thing called nuclear weapons and other things, like lots of things are done with uranium, including some bad things.\"",
	    	source: "Press Conference, 2017",
	    	link: "http://www.cnn.com/2017/02/16/politics/donald-trump-news-conference-transcript/index.html"
	    },
		{
	    	quote:"\"I have a very good brain and I have said a lot of things.\"",
	    	source: "MSNBC, 2016",
	    	link: "http://www.politico.com/blogs/2016-gop-primary-live-updates-and-results/2016/03/trump-foreign-policy-adviser-220853"
	    },
	    {
	    	quote:"\"I don't stand by anything.\"",
	    	source: "CBS, 2017",
	    	link: "http://www.politico.com/story/2017/05/01/trump-surveillance-claims-cbs-interview-237831"
	    },
		{
	    	quote:"\"We can’t have someone in the Oval Office who doesn’t understand the meaning of the word ‘confidential.’\"",
	    	source: "Campaign Rally (Greenville, NC), 2016",
	    	link: "https://www.youtube.com/watch?v=3ghSPPLdFYE"
	    },
	    {
	    	quote:"\"But in a short period of time I understood everything there was to know about health care.\"",
	    	source: "Time Magazine, 2017",
	    	link: "http://time.com/4775040/donald-trump-time-interview-being-president/"
	    },
	    {
 			quote:"\"There’s nobody bigger or better at the military than I am.\"",
	    	source: "Fox News, 2015",
	    	link: "http://www.foxnews.com/transcript/2015/06/17/donald-trump-running-for-president.html"
	    },
	    {
	     	quote:"\"Nobody has more respect for women than I do.\"",
	    	source: "NBC Today, 2016",
	    	link: "http://www.nbcnews.com/video/trump-nobody-has-more-respect-for-women-than-i-do-789681219551"
	    },
	    {
	    	quote:"\"There’s nobody that understands the horror of nuclear better than me.\"",
	    	source: "Campaign Rally (Atlanta, GA), 2016",
	    	link: "https://www.youtube.com/watch?v=h7JYuVEAqEQ"
	    },
	   	{
			quote:"\"It is a great honor to be here with all of my friends - so amazing and will never forget.\"",
	    	source: "Israeli Holocaust memorial, 2017",
	    	link: "http://thehill.com/homenews/administration/334720-trump-marks-visit-to-holocaust-memorial-with-guestbook-message"
	    },
	    {
	    	quote:"\"You know, if you’re a conservative Republican, if I were a liberal, if, like, OK, if I ran as a liberal Democrat, they would say I'm one of the smartest people anywhere in the world.\"",
	    	source: "Campaign Rally (Sun City, SC), 2015",
	    	link: "http://www.snopes.com/donald-trump-sentence/"
	    },
	    {
	    	quote:"\"My uncle used to tell me about nuclear before nuclear was nuclear.\"",
	    	source: "Boston Globe, 2015",
	    	link: "https://www.bostonglobe.com/news/politics/2015/08/31/donald-trump-says-his-late-uncle-mit-professor-was-proof-family-smart-genes/yoGlj3ESPWxBc7E5nSBlPN/story.html"
	    },
	    {
	    	quote:"\"An 'extremely credible source' has called my office and told me that Barack Obama's birth certificate is a fraud.\"",
	    	source: "Twitter, 2012",
	    	link: "https://twitter.com/realdonaldtrump/status/232572505238433794?lang=en"
	    },
	    {
	    	quote:"\"Remember, don't believe \"sources said\" by the VERY dishonest media. If they don't name the sources, the sources don't exist.\"",
	    	source: "Twitter, 2016",
	    	link: "https://twitter.com/realdonaldtrump/status/781838706030313472?lang=en"
	    },
	   	{
	    	quote:"\"Nobody knew healthcare could be so complicated.\"",
	    	source: "Press Conference, 2017",
	    	link: "http://www.politico.com/story/2017/02/trump-nobody-knew-that-health-care-could-be-so-complicated-235436"
	    },
	   	{
	    	quote:"\"[John McCain's] not a war hero. I like people who weren’t captured.\"",
	    	source: "Family Leadership Summit (Ames, IA), 2015",
	    	link: "http://www.politico.com/story/2015/07/trump-attacks-mccain-i-like-people-who-werent-captured-120317"
	    },
	    {
	    	quote:"\"I know words, I have the best words.\"",
	    	source: "Campaign Rally (Hilton Head, SC), 2015",
	    	link: "https://www.youtube.com/watch?v=7UIE_MRAhEA"
	    },
	    {
	    	quote:"\"I don't repeat myself. I don't repeat myself.\"",
	    	source: "Republican Debate, 2016",
	    	link: "https://www.youtube.com/watch?v=sQ4l9yq6ztk"
	    },
	    {
	    	quote:"\"I will tell you this, Russia: If you’re listening, I hope you’re able to find the 30,000 emails that are missing.\"",
	    	source: "Press Conference, 2016",
	    	link: "https://www.nytimes.com/2016/07/28/us/politics/donald-trump-russia-clinton-emails.html?_r=0"
	    },
	    {
	    	quote:"\"Knock the crap out of him. I promise you I'll pay for the legal fees.\"",
	    	source: "Campaign Rally (Cedar Rapids, IA), 2016",
	    	link: "http://time.com/4203094/donald-trump-hecklers/"
	    },
	    {
	    	quote:"\"I have the most loyal people. I could stand in the middle of 5th Avenue and shoot somebody and wouldn't lose any voters.\"",
	    	source: "Campaign Rally (Sioux Center, IA), 2016",
	    	link: "http://thehill.com/blogs/ballot-box/gop-primaries/266809-trump-i-could-shoot-people-in-streets-and-not-lose-support"
	    },
	    {
	       	quote:"\"@BarackObama has a record low 39% Gallup approval rating. Why so high?\"",
	    	source: "Twitter, 2011",
	    	link: "https://twitter.com/realDonaldTrump/status/103853707757764609"
	    },
	    {
	    	quote:"\"They show those phony statistics where we are 5.4% unemployment. The real number, I saw a number that could be 42%, believe it or not.\"",
	    	source: "National Federation of Republican Assemblies, 2015",
	    	link: "http://archive.org/details/CSPAN_20150830_174700_Washington_This_Week/start/724/end/784?q=phony+number"
	    },
	    {
	    	quote:"\"President Obama played golf yesterday???\"",
	    	source: "Twitter, 2013",
	    	link: "https://twitter.com/realdonaldtrump/status/402420689560686592?lang=en"
	    },
	    {
	    	quote:"\"Ted Nugent was obviously using a figure of speech [when threatening Barack Obama], unfortunate as it was.\"",
	    	source: "Twitter, 2012",
	    	link: "https://twitter.com/realdonaldtrump/status/193051919260979201"
	    },
	    {
	    	quote:"\"Crooked Hillary Clinton and her team \"were extremely careless in their handling of very sensitive, highly classified information.\" Not fit!\"",
	    	source: "Twitter, 2016",
	    	link: "https://twitter.com/realdonaldtrump/status/750648675186147328?lang=en"
	    },
	    {
	    	quote:"\"I am not trying to get \"top level security clearance\" for my children. This was a typically false news story.\"",
	    	source: "Twitter, 2016",
	    	link: "https://twitter.com/realDonaldTrump/status/798850338384023552?s=09"
	    },
	    {
	    	quote:"\"He [Obama] lost the popular vote by a lot and won the election. We should have a revolution in this country!\"",
	    	source: "Twitter, 2012",
	    	link: "http://mashable.com/2012/11/06/trump-reacts-to-election/#cMgImz2.qkq8"
	    },
	    {
	    	quote:"\"We need a President who isn't a laughing stock to the entire World. We need a truly great leader, a genius at strategy and winning. Respect!\"",
	    	source: "Twitter, 2014",
	    	link: "https://twitter.com/realdonaldtrump/status/498008486551506945?lang=en"
	    },
	    {
	    	quote:"\"Obama looks absolutely exhausted in the Netherlands. He is not a natural leader, was never ment to lead - it is tough work for him\"",
	    	source: "Twitter, 2014",
	    	link: "https://twitter.com/realdonaldtrump/status/487096016982650880?lang=en"
	    },
	    {
	    	quote:"\"I am honered to serve you, the great American People.\"",
	    	source: "Twitter, 2017",
	    	link: "http://thehill.com/blogs/blog-briefing-room/news/315460-trump-says-hes-honered-to-serve-in-misspelled-tweet"
	    },
	    {
	    	quote:"\"I am being investigated for firing the FBI Director by the man who told me to fire the FBI Director! Witch Hunt.\"",
	    	source: "Twitter, 2017",
	    	link: "https://twitter.com/realDonaldTrump/status/875701471999864833"
	    },
	   	{
	    	quote:"\"Are you allowed to impeach a president for gross incompetence?\"",
	    	source: "Twitter, 2014",
	    	link: "https://twitter.com/realdonaldtrump/status/474134260149157888?lang=en"
	    },
	  	{
	    	quote:"\"Wikileaks! I love Wikileaks.\"",
	    	source: "Campaign Rally (Wilkes Barre, PA), 2016",
	    	link: "http://thehill.com/blogs/blog-briefing-room/news/330052-wikileaks-reminds-trump-of-time-he-said-i-love-wikileaks"
	    },
	    {
	    	quote:"\"I would like to wish all fathers, even the haters and losers, a very happy Fathers Day.\"",
	    	source: "Twitter, 2014",
	    	link: "https://twitter.com/realdonaldtrump/status/478018343967162369"
	    },
	    {
	    	quote:"\"I would like to extend my best wishes to all, even the haters and losers, on this special date, September 11th.\"",	    	
	    	source: "Twitter, 2013",
	    	link: "https://twitter.com/realDonaldTrump/status/377947866641485824"
	    },
	   	{
	    	quote:"\"Do you think Putin will be going to The Miss Universe Pageant in November in Moscow - if so, will he become my new best friend?\"",
	    	source: "Twitter, 2013",
	    	link: "https://twitter.com/realdonaldtrump/status/347191326112112640"
	    },
	   	{
	    	quote:"\"The Panama Canal is doing quite well...and also, friendship with the president is very, very good.\"",
	    	source: "Meeting the Panamanian President, 2017",
	    	link: "https://www.whitehouse.gov/the-press-office/2017/06/19/remarks-president-trump-and-president-juan-carlos-varela-panama-during"
	    },
	  	{
	    	quote:"\"That’s it, bye-bye. Wave goodbye. What a mess.\"",
	    	source: "Press Conference (Cincinnati, OH), 2017",
	    	link: "https://twitter.com/dcexaminer/status/872507551216226305"
	    },
	   	{
	    	quote:"\"If I had been the son of a coal miner, I would have left the damn mines. But most people don’t have the imagination — or whatever — to leave their mine. They don’t have “it.”.\"",
	    	source: "Playboy Interview, 1990",
	    	link: ""
	    },
	   	{
	    	quote:"\"Your reputation is amazing. I will not let you [Alex Jones] down.\"",
	    	source: "Infowars.com interview with Alex Jones, 2015",
	    	link: "http://www.cnn.com/2015/12/02/politics/donald-trump-praises-9-11-truther-alex-jones/index.html"
	    },
	   	{
	    	quote:"\"We're thinking about building the wall as a solar wall...Pretty good imagination, right? Good? My idea.\"",
	    	source: "Campaign Rally (Cedar Rapids, IA), 2017",
	    	link: "http://fortune.com/2017/06/23/fact-checking-donald-trump-solar-powered-wall/"
	    },
	   	{
	    	quote:"\"I love all people - rich or poor - but in those particular positions, I just don't want a poor person.\"",
	    	source: "Campaign Rally (Cedar Rapids, IA), 2017",
	    	link: "http://www.cnn.com/2017/06/22/politics/donald-trump-poor-person-cabinet/index.html"
	    },
	   	{
	    	quote:"\"I have a son. He's 10 years old. He has computers. He is so good with these computers, it's unbelievable. The security aspect of cyber is very, very tough.\"",
	    	source: "Presidential Debate, 2016",
	    	link: "https://www.youtube.com/watch?v=bYJ_H2c5IWc"
	    },
	    {
	    	quote:"\"James Comey better hope that there are no \"tapes\" of our conversations before he starts leaking to the press!\"",
	    	source: "Twitter, 2017",
	    	link: "https://twitter.com/realdonaldtrump/status/863007411132649473"
	    },
	    {
	    	quote:"\"I did not make, and do not have, any such recordings [of James Comey].\"",
	    	source: "Twitter, 2017",
	    	link: "https://twitter.com/realDonaldTrump/status/877932956458795008?ref_src=twsrc%5Etfw&ref_url=http%3A%2F%2Fwww.pbs.org%2Fnewshour%2Frundown%2Ftrump-twitter-not-make-not-recorded-conversations-comey%2F"
	    },	    
	    {
	    	quote:"\"Grab ’em by the pussy. You can do anything.\"",
	    	source: "Access Hollywood, 2005",
	    	link: "https://www.nytimes.com/2016/10/08/us/donald-trump-tape-transcript.html"
		},
		{
			quote:"\"I just start kissing them. It’s like a magnet. Just kiss. I don’t even wait. And when you’re a star, they let you do it. You can do anything.\"",
	    	source: "Access Hollywood, 2005",
	    	link: "https://www.nytimes.com/2016/10/08/us/donald-trump-tape-transcript.html"
		},
		{
			quote:"\"I was the first & only potential GOP candidate to state there will be no cuts to Social Security, Medicare & Medicaid. Huckabee copied me.\"",
	    	source: "Twitter, 2015",
	    	link: "https://twitter.com/realDonaldTrump/status/596338364187602944"
		},
		{
			quote:"\"The leaks are absolutely real. The news is fake because so much of the news is fake.\"",
	    	source: "Press Conference, 2017",
	    	link: "https://www.youtube.com/watch?v=sOVliNN9cWM"
		},
		{
			quote:"\"Grab ’em by the pussy. You can do anything.\"",
	    	source: "Access Hollywood, 2005",
	    	link: "https://www.nytimes.com/2016/10/08/us/donald-trump-tape-transcript.html"
		},
		{
			quote:"\"This is infinity here. It could be infinity. We don’t really don’t know. But it could be. It has to be something — but it could be infinity, right?\"",
	    	source: "Reinstatement of National Space Council, 2017",
	    	link: "https://www.whitehouse.gov/the-press-office/2017/06/30/remarks-president-signing-executive-order-national-space-council"
		},
		{
			quote:"\"I am going to give a major speech on, probably Monday of next week. And we're going to be discussing all of things that have taken place with the Clintons.\"",
	    	source: "Primary Speech (Briarcliff Manor, NY), 2016",
	    	link: "http://www.huffingtonpost.com/entry/trump-clinton-don-jr-russia_us_596562fee4b09b587d633d10"
		},
		{
			quote:"\"Obama's complaints about Republicans stopping his agenda are BS since he had full control for two years. He can never take responsibility.\"",
	    	source: "Twitter, 2012",
	    	link: "https://twitter.com/realdonaldtrump/status/250975772083380226"
		},
		{
			quote:"\"Be prepared, there is a small chance that our horrendous leadership could unknowingly lead us into World War III.\"",
	    	source: "Twitter, 2013",
	    	link: "https://twitter.com/realdonaldtrump/status/373743492151136256"
		},
		{
			quote: "\"When Mexico sends its people, they're not sending their best. They're sending people that have lots of problems, and they're bringing those problems with us. They're bringing drugs. They're bringing crime. They're rapists. And some, I assume, are good people.\"",
			source: "Presidential Announcement, 2015",
	    	link: "http://time.com/3923128/donald-trump-announcement-speech/"
		},
		{
			quote: "\"What a Crowd! What a turnout!\"",
			source: "Hurricane Harvey visit (Corpus Christi, TX), 2017",
	    	link: "https://www.youtube.com/watch?v=UmcV8v8iboE"
		},
		{
			quote: "\"[Hurricane Irma] looks like it could be something that will be not good. Believe me, not good.\"",
			source: "White House, 2017",
	    	link: "http://thehill.com/homenews/administration/349422-trump-on-hurricane-irma-not-good"
	    },
	    {
			quote: "\"Windmills are the greatest threat in the US to both bald and golden eagles. Media claims fictional ‘global warming’ is worse.\"",
			source: "Twitter, 2014",
	    	link: "https://twitter.com/realdonaldtrump/status/509436043368873984"
	    },

	];

// Stores indices for used quotes
var usedQuotes = [];

function getRandomQuote() {
  // select random quote
  var randomIndex = Math.floor(Math.random() * quotes.length);
  if(usedQuotes.length === quotes.length) {
    usedQuotes = [];
  }
  while(usedQuotes.indexOf(randomIndex) !== -1 && usedQuotes.length > 0) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }

  usedQuotes.push(randomIndex);
  // return the random quote
  return quotes[randomIndex];
}

function printQuote() {
  document.getElementById('quote-box').innerHTML = "";

var usedQuote = getRandomQuote();

var newHTML = '<h3 id="quote">' + usedQuote.quote +'</h3> <h3 id="source">' + usedQuote.source;
if(usedQuote.citation !== undefined) {
    newHTML += '<span class="link">' + usedQuote.citation + '</span>';
  }

newHTML += '</h3>';
  document.getElementById('quote-box').innerHTML = newHTML;

}



