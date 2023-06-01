document.addEventListener('DOMContentLoaded', function() {
    // Function to get cookie value
    function getCookie(name) {
        var cookieArr = document.cookie.split(";");
        
        for(var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            
            if(name == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        
        return null;
    }

    // Check if wf_loggedin cookie exists and its value is true
    if(getCookie('wf_loggedin') === 'true') {
        // Select all elements with suite-loggedin=true
        var elements = document.querySelectorAll('[suite-loggedin="true"]');
        
        // Iterate over the selected elements and change the image URL
        for(var i = 0; i < elements.length; i++) {
            var imgUrl = elements[i].getAttribute('suite-image');
            if(imgUrl) {
                elements[i].src = imgUrl;
            }
        }
    }
});
