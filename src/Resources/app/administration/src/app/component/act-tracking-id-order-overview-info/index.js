import template from './act-tracking-id-order-overview-info.html.twig';
import './act-tracking-id-order-overview-info.scss';

const { Component } = Shopware;

const HOW_TO_ITEM_COUNT = 4;

Component.register('act-tracking-id-order-overview-info', {
    template,

    computed: {
        howToItems() {
            return Array.from(
                { length: HOW_TO_ITEM_COUNT },
                (_, index) => `act-tracking-id-order-overview.settings.info.howTo.item${index + 1}`,
            );
        },
    },
});
