const { Component } = Shopware;
import template from './sw-order-list.html.twig';


import deDE from '../../../../snippet/de-DE.json';
import enGB from '../../../../snippet/en-GB.json';

Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('en-GB', enGB);

Shopware.Component.override('sw-order-list', {
    template,

    computed: {
        orderCriteria() {
            const criteria = this.$super('orderCriteria');
            return criteria;
        }
    },

    methods: {
        getOrderColumns() {
            const columns = this.$super('getOrderColumns');
            
            columns.push({
                property: 'deliveries',
                label: 'sw-order.list.columnTrackingId',
                allowResize: true,
                sortable: false
            });

            return columns;
        },

        getTrackingNumbers(order) {
            if (!order.deliveries || order.deliveries.length === 0) {
                return '';
            }

            const trackingNumbers = [];
            order.deliveries.forEach((delivery) => {
                if (delivery.trackingCodes && delivery.trackingCodes.length > 0) {
                    trackingNumbers.push(...delivery.trackingCodes);
                }
            });

            return trackingNumbers.join(', ');
        }
    }
});