require(['configTest'], function() {
	require(['widgetHandle', 'widgetHandleList'],function(WidgetHandle, WidgetHandleList){
		
			QUnit.test( "WidgetHandleList", function( assert ) {
				
				
				
				var widgetHandle = new WidgetHandle().withName('testWidget').withId('testId');
				var widgetHandle2 = new WidgetHandle().withName('testWidget2').withId('testId2');
				var widgetHandle3 = new WidgetHandle().withName('testWidget3').withId('testId3');
				
				var array = new Array();
				array.push(widgetHandle2);
				array.push(widgetHandle3);
				var list = new WidgetHandleList().withItems(array);
				assert.ok( list.size() == 2, "Passed!: Builder (withItems)" );
				
				var list2 = new WidgetHandleList();
				list2.put(widgetHandle);
				
				assert.ok( list2.size() == 1, "Passed!: Put type to list (put)" );
				
				list2.putAll(array);
				assert.ok( list2.size() == 3, "Passed!: Put another two type to list (putAll)" );
				
				//contains
				assert.ok( list2.contains(widgetHandle), "Passed!: contains -> true" );
				assert.ok( !list.contains(widgetHandle), "Passed!: contains -> false" );
				
				//equals
				assert.ok( list2.equals(list2), "Passed!: equals -> true" );
				assert.ok( !list.equals(list2), "Passed!: equals -> false" );
				
			});

	});
});