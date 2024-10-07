document.getElementById("giftBox").addEventListener("click", function() {
    this.classList.add("open");
    document.getElementById("nextPageBtn").style.display = "block";  // Show "MoreLOVE..." button after box opens
  });
  
  document.getElementById("nextPageBtn").addEventListener("click", function() {
    document.getElementById("cardMessage").style.display = "none";  // Hide birthday card
    const koreanMessage = document.getElementById("koreanMessage");
    koreanMessage.classList.add("show");  // Show Korean message with animation
    console.log("Korean message displayed");
  });
  
  document.getElementById("closeBoxBtn").addEventListener("click", function() {
    // Reset everything to the initial state
    document.getElementById("giftBox").classList.remove("open");
    document.getElementById("cardMessage").style.display = "none";
    document.getElementById("nextPageBtn").style.display = "none";
    const koreanMessage = document.getElementById("koreanMessage");
    koreanMessage.classList.remove("show");
    koreanMessage.style.display = "none";  // Hide Korean message
    document.getElementById("giftBox").style.display = "block";  // Show the gift box again
  });
  