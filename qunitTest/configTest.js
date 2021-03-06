requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../js',
    //except, if the module ID starts with another path,
    //load them from their respective directory.
    paths:
    {
        jquery: '../libs/jquery/jquery',
        easejs: '../libs/ease.js/ease-full',
        MathUuid: '../libs/uuid/Math.uuid',
        contAcT: '../dist/contAcT',
        retrievalResult: 'modules/aggregator/storage/retrievalResult',
		storage: 'modules/aggregator/storage/storage',
		aggregator: 'modules/aggregator/aggregator',
		testAggregator: 'modules/aggregator/testAggregator',   
	    attributeType: 'modules/attribute/attributeType',
	    attributeValue: 'modules/attribute/attributeValue',
	    attributeTypeList: 'modules/attribute/attributeTypeList',
	    attributeValueList: 'modules/attribute/attributeValueList',
	    parameter: 'modules/attribute/parameter',
	    parameterList: 'modules/attribute/parameterList',		
	    condition: 'modules/subscriber/condition/condition',
	    conditionList: 'modules/subscriber/condition/conditionList',
	    conditionMethod: 'modules/subscriber/condition/conditionMethod',
	    equals: 'modules/subscriber/condition/equals',	
	    unequals: 'modules/subscriber/condition/unequals',	
	    interpreterDescription: 'modules/descriptions/interpreterDescription',
	    widgetDescription: 'modules/descriptions/widgetDescription',	    
	    discoverer: 'modules/discoverer/discoverer',	    
	    addressInterpreter: 'modules/interpreter/addressInterpreter',
	    interpreter: 'modules/interpreter/interpreter', 
	    interpreterResult: 'modules/interpreter/interpreterResult',
	    callback: 'modules/subscriber/callback',   
	    callbackList: 'modules/subscriber/callbackList',
	    subscriber: 'modules/subscriber/subscriber',
	    subscriberList: 'modules/subscriber/subscriberList', 
	    geoLocationWidget: 'modules/widget/geoLocationWidget',
	    widget: 'modules/widget/widget',      
	    widgetHandle: 'modules/widget/widgetHandle',  		
	    widgetHandleList: 'modules/widget/widgetHandleList',    
	    abstractList: 'modules/abstractList'
    },
    
    shim:{
    	
      'easejs' : {
        exports : 'easejs',
      },
      'jquery' : {
          exports : '$',
        },
        
      'MathUuid' : {
          exports : 'MathUuid',
        },
         
    }

});