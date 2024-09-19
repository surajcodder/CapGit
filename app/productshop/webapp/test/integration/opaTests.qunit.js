sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'productshop/test/integration/FirstJourney',
		'productshop/test/integration/pages/productList',
		'productshop/test/integration/pages/productObjectPage'
    ],
    function(JourneyRunner, opaJourney, productList, productObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('productshop') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheproductList: productList,
					onTheproductObjectPage: productObjectPage
                }
            },
            opaJourney.run
        );
    }
);