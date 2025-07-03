<?php declare(strict_types=1);

namespace ActTrackingIdOrderOverview;

use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Shopware\Core\Framework\Plugin\Context\InstallContext;

class ActTrackingIdOrderOverview extends Plugin
{

    public function install(InstallContext $context): void
    {
        parent::install($context);
    }

    public function uninstall(UninstallContext $context): void
    {
        parent::uninstall($context);
    }
}
