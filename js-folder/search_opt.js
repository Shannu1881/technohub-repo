


// Add an event listener to the form for submission
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the value entered in the search input
    var searchQuery = document.getElementById("searchInput").value;

    var searchQuery2 = searchQuery.toLowerCase();

    // Process the search query and decide which page to redirect to
    var destinationPage = determineDestinationPage(searchQuery2);

    // Redirect the page to the determined destination
    window.location.href = destinationPage;
});

// Function to determine the destination page based on the search query
function determineDestinationPage(searchQuery2) {
    // You can implement your own logic here to decide the destination page
    // For example, you can use switch-case or if-else statements to map search queries to specific pages
    // For simplicity, we'll use a basic example here:

    switch (searchQuery2) {
        case 'testing':
        case 'software testing':
        case 'manual testing':
        case 'automation testing':
        case 'selenium testing':
        case 'selenium':
            return "testing.html";
            break;
        case 'python language':
        case 'python':
            return "python.html"
            break;
        case 'react.js':
        case 'react':
        case 'react js':
        case 'frontend development':
        case 'react native':
        case 'react native development':
        case 'ui development':
        case 'frontend':
            return "react.html";
            break;
        case 'java':
        case 'corejava':
        case 'core java':
        case 'spring boot':
        case 'advanced java':
            return "java.html";
            break;
        case 'javascript':
        case 'js':
            return "javascript.html";
            break;
        case 'node':
        case 'node js':
        case 'node.js':
            return "nodejs.html";
            break;
        case 'angular':
        case 'angular js':
        case 'angular.js':
            return "angular.html";
            break;
        case 'sql':
        case 'sql database':
        case 'sql course':
            return "sql.html";
            break;
        case 'android':
        case 'android course':
        case 'mobile development':
            return "android.html";
            break;
        case 'devops':
        case 'devops course':
            return "devops.html";
            break;
        case 'git':
        case 'github':
        case 'github course':
            return "GitHub.html";
            break;
        case 'cyber':
        case 'security':
        case 'cyber security':
        case 'cybersecurity':
            return "cybersecurity.html";
            break;
        case 'ionic':
        case 'ionichybrid':
        case 'hybrid development':
        case 'ionic development':
            return "ionicHybrid.html";
            break;
        case 'microsoft azure':
        case 'microsoftazure':
        case 'microsoft azure course':
        case 'azure':
            return "microsoftazure.html";
            break;
        case 'microsoft power':
        case 'microsoftpower':
        case 'microsoft power development':
            return "microsoftpower.html";
            break;
        case 'microsoft infrastructure':
        case 'infrastructure course':
        case 'infrastructure':
        case 'microsoft infrastructure':
            return "microsoftInfrastructure.html";
            break;
        case 'microsoft fundamentals':
        case 'fundamentals of microsoft':
        case 'fundamentals course':
        case 'fundamentals':
            return "microsoftdatafundamental.html";
            break;
        case 'power BI':
        case 'powerbi':
        case 'microsoft powerbi':
        case 'power BI course':
            return "powerbi.html";
            break;
        default:
            return "Not found the course";
    }
}

