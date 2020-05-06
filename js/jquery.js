  $(document).ready(function(){
  $("#skills").click(function(){
    console.log("button clicked");
    $(".form-control").attr("placeholder", "Search for a skill, such as 'accounting'");
    $(".btn-primary").text("Skill");
  });
  $("#location").click(function(){
    console.log("button clicked");
    $(".form-control").attr("placeholder", "Search for a location, such as 'Ann Arbor'");
    $(".btn-primary").text("Location");
  });
  $("#mentor-name").click(function(){
    console.log("button clicked");
    $(".form-control").attr("placeholder", "Search for a mentor's name, such as 'Sue Dean'");
    $(".btn-primary").text("Name");
  });
});

  $( function() {
    var availableTags = ["accounting", "activism", "advertising", "advocacy", "artificial intelligence", "arts", "athletics", "automotive",
"autonomous vehicles", "big data", "biodiversity", "bootstrap financing", "budget management",
"business modeling & planning", "campus knowledge", "child care", "early child development", "chronic illness",
"climate change", "college access & preparation", "communications", "community organizing",
"cosmetics", "data anlysis", "data visualization", "dance", "disability issues",
"design", "economics", "education administration", "education", "higher education", "elder care", "generational divides",
"emotional intelligence", "engineering", "environmental and ecological protection", "event planning", "facilitation",
"fashion", "fitness", "food", "food access", "foundations", "fundraising (non-profit)", "fundraising (for-profit)", 
"gender issues", "general mentorship", "graphic design", "great lakes", "government", "hardware", "health and wellness",
"healthcare industry", "hiring", "homelessness", "hospitals", "human resources", "humanities", "hunger issues",
"illustration", "immigration", "infrastructure", "journalism", "language issues", "translation", "law", "life coaching",
"logistics", "management", "marketing", "maternity", "media", "medicine", "mental health", "mindfulness", "minority communities",
"music", "natural sciences", "nonprofits", "oceans", "onboarding & training", "operations", "outreach",
"philanthropy", "photography", "pilot programs", "pitching", "political campaigns",
"poverty alleviation", "prison issues", "product design", "project management", "prototyping", "publishing",
"public health", "public relations", "racial justice", "recruitment", "refugees", "relationship building",
"renewable energy", "research", "rural issues", "self care", "social justice", "social media", "social sciences",
"software design", "software development", "start-ups", "STEM education",
"storytelling", "strategic planning", "student organizations", "supply chain management",
"sustainable business", "transportation", "urban planning", "venture capital", "video production",
"virtual reality", "waste & recycling", "water issues", "website design", "wildlife issues", "writing & editing"];
    $( "#ed-srch-term" ).autocomplete({
      source: availableTags
    });
  } );
