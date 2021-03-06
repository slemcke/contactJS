/**
 * This module represents a WidgetHandleList. It is a subclass of
 * AbstractList.
 * 
 * @module WidgetHandleList
 * @fileOverview
 */
define([ 'easejs', 'abstractList', 'widgetHandle' ],
	function(easejs, AbstractList, WidgetHandle) {
		var Class = easejs.Class;
		/**
		 * @class WidgetHandleList
		 * @classdesc This class represents a list for WidgetHandle.
		 * @extends AbstractList
		 * @requires easejs
		 * @requires AbstractList
		 * @requires WidgetHandle
		 */
		var WidgetHandleList = Class('WidgetHandleList').extend(AbstractList,{
			/**
			 * @alias counter
			 * @protected
			 * @type {integer}
			 * @memberof WidgetHandleList#
			 * @desc Number of items.
			 */
			'protected counter' : 0,
			/**
			 * @alias items
			 * @protected
			 * @type {WidgetHandleList}
			 * @memberof WidgetHandleList#
			 * @desc ItemList.
			 */
			'protected items' : [],
			
			/**
			 * Builder for item list.
			 * 
			 * @public
			 * @alias withItems
			 * @memberof WidgetHandleList#
			 * @param {(WidgetHandleList|Array)}
			 *            _widgetHandleList WidgetHandleList
			 * @returns {WidgetHandleList}
			 */
			'public withItems' : function(_widgetHandleList) {
				var list = new Array();
				if (_widgetHandleList instanceof Array) {
					list = _widgetHandleList;
				} else if (Class.isA(WidgetHandleList, _widgetHandleList)) {
					list = _widgetHandleList.getItems();
				}
				for ( var i in list) {
					var widgetHandle = list[i];
					if (Class.isA(WidgetHandle,	widgetHandle)) {
						this.items[widgetHandle.getName()] = widgetHandle;
						this.counter++;
					}
				}
				return this;
			},
			
			/**
			 * Adds the specified item to theitem list.
			 * 
			 * @public
			 * @alias put
			 * @memberof WidgetHandleList#
			 * @param {WidgetHandle}
			 *            _widgetHandle WidgetHandle
			 */
			'public put' : function(_widgetHandle) {
				if (Class.isA(WidgetHandle, _widgetHandle)) {
					if (!(this.containsKey(_widgetHandle.getName()))) {
						this.counter++;
					}
					this.items[_widgetHandle.getName()] = _widgetHandle;
				}
			},
			
			/**
			 * Adds all items in the specified list to the item list.
			 * 
			 * @public
			 * @alias putAll
			 * @memberof WidgetHandleList#
			 * @param {WidgetHandleList}
			 *            _widgetHandleList WidgetHandleList
			 */
			'public putAll' : function(_widgetHandleList) {
				var list = new Array();
				if (_widgetHandleList instanceof Array) {
					list = _widgetHandleList;
				} else if (Class.isA(WidgetHandleList, _widgetHandleList)) {
					list = _widgetHandleList.getItems();
				}
				for ( var i in list) {
					var widgetHandle = list[i];
					if (Class.isA(WidgetHandle,	widgetHandle)) {
						if (!(this.containsKey(widgetHandle.getName()))) {
							this.counter++;
						}
						this.items[widgetHandle.getName()] = widgetHandle;
					}
				}
			},
			
			/**
			 * Verifies whether the given item is included
			 * in this list.
			 * 
			 * @public
			 * @alias contains
			 * @memberof WidgetHandleList#
			 * @param {WidgetHandle}
			 *            _item WidgetHandle that should be
			 *            verified.
			 * @returns {boolean}
			 */
			'public contains' : function(_item) {
				if (Class.isA(WidgetHandle, _item)) {
					var tmp = this.getItem(_item.getName());
					if (!(typeof tmp === 'undefined') && tmp.equals(_item)) {
						return true;
					}
				}
				return false;
			},
			/**
			 * Compare the specified WidgetHandleList with this instance.
			 * @public
			 * @alias equals
			 * @memberof WidgetHandleList#
			 * @param {WidgetHandleList} _list WidgetHandleList that should be compared.
			 * @returns {boolean}
			 */
			'public equals' : function(_list) {
				if (Class.isA(WidgetHandleList, _list) && _list.size() == this.size()) {
					var items = _list.getItems();
					for ( var i in items) {
						var item = items[i];
						if (!this.contains(item)) {
							return false;
						}
					}
					return true;
				}
				return false;
			},
		});
		return WidgetHandleList;
	});