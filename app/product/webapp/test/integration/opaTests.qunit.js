sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'logaligroup/product/test/integration/FirstJourney',
		'logaligroup/product/test/integration/pages/ProdcutsList',
		'logaligroup/product/test/integration/pages/ProdcutsObjectPage',
		'logaligroup/product/test/integration/pages/ReviewsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProdcutsList, ProdcutsObjectPage, ReviewsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('logaligroup/product') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProdcutsList: ProdcutsList,
					onTheProdcutsObjectPage: ProdcutsObjectPage,
					onTheReviewsObjectPage: ReviewsObjectPage
                }
            },
            opaJourney.run
        );
    }
);