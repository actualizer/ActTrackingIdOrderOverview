# ActTrackingIdOrderOverview - Shopware Plugin

A Shopware 6 plugin that enhances the admin order overview by adding a tracking number column, allowing merchants to view shipment tracking numbers directly in the order list without having to open individual order details.

## Features

- ✅ Adds "Tracking Number" column to the admin order overview
- ✅ Displays all tracking numbers for deliveries directly in the order listing
- ✅ Supports multiple tracking numbers per order
- ✅ Seamless integration with Shopware's admin interface
- ✅ Multi-language support (German & English)
- ✅ Compatible with Shopware 6.6.10 - 6.7.x

## Requirements

- Shopware 6.6.10 or higher (up to 6.7.x)
- PHP 8.3 or higher

## Installation

1. Download or clone this plugin into your `custom/plugins/` directory
2. Install and activate the plugin via CLI:
   ```bash
   bin/console plugin:refresh
   bin/console plugin:install --activate ActTrackingIdOrderOverview
   bin/console cache:clear
   ```

## How it works

1. **Admin Enhancement**: The plugin extends the order overview page in the Shopware admin
2. **Tracking Display**: Tracking numbers from all deliveries are collected and displayed in a new column
3. **Multiple Tracking Support**: If an order has multiple deliveries with different tracking numbers, all are shown
4. **Real-time Data**: Tracking numbers are fetched directly from the order's delivery data

## Technical Details

### Admin Integration
The plugin extends the following admin components:
- **Order List Page**: Adds tracking number column to the order grid
- **JavaScript Module**: Custom Vue.js component integration
- **Twig Template**: Extended order list template

### Data Source
Tracking numbers are retrieved from:
- Order delivery entities (`order_delivery`)
- Tracking codes associated with each delivery
- Real-time data fetching (no caching required)

## Translations

The plugin includes translations for:
- **German (de-DE)**: Trackingnummer
- **English (en-GB)**: Tracking Number

Translation keys:
- `sw-order.list.columnTrackingId`

## File Structure

```
ActTrackingIdOrderOverview/
├── composer.json
├── LICENSE
├── README.md
├── src/
│   ├── ActTrackingIdOrderOverview.php
│   └── Resources/
│       ├── app/
│       │   └── administration/
│       │       └── src/
│       │           ├── main.js
│       │           ├── module/
│       │           │   └── sw-order/
│       │           │       └── page/
│       │           │           └── sw-order-list/
│       │           │               ├── index.js
│       │           │               └── sw-order-list.html.twig
│       │           └── snippet/
│       │               ├── de-DE.json
│       │               └── en-GB.json
│       ├── config/
│       │   └── plugin.png
│       └── public/
│           └── administration/
│               ├── .vite/
│               └── assets/
│                   ├── act-tracking-id-order-overview-[hash].js
│                   └── act-tracking-id-order-overview-[hash].js.map
```

## Development

### Building/Testing
After making changes to admin components:
```bash
bin/console plugin:install --activate ActTrackingIdOrderOverview
bin/console cache:clear
./bin/build-administration.sh
```

### Admin Development
The plugin extends Shopware's Vue.js admin interface:
- **Component Extension**: Extends `sw-order-list` component
- **Template Override**: Adds tracking column to order grid
- **Data Fetching**: Uses Shopware's data handling mechanisms

## Compatibility

- **Shopware Version**: 6.6.10 - 6.7.x
- **PHP Version**: 8.3+
- **Admin Compatibility**: Uses Shopware 6.6+ admin structure
- **Frontend Impact**: None (admin-only plugin)

## Use Cases

- **Order Management**: Quick overview of shipped orders with tracking information
- **Customer Service**: Faster response to customer inquiries about shipment status
- **Warehouse Operations**: Streamlined tracking number verification
- **Multi-delivery Orders**: Easy view of complex orders with multiple shipments

## Support

For issues and feature requests, please use the GitHub issue tracker.

## License

This plugin is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

Developed by Actualize

---

Made with ❤️ for the Shopware Community
