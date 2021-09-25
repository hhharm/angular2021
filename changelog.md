# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.3] - 2021-09-25
### Added 
- Added Core module
- Added ConfigOptionsService
- Added ConstantsService (Token)
- Added generator service and factory for random alfanum string of length n and generator of numbers
- Added localStorage service
- Added focus directive to set backgroundColor to input color on element click

### Changed
- Changed cart service: renamed methods, added totalSum and totalQuantity fields, added isEmptyCart and updateCartData methods


## [0.0.2] - 2021-09-25
### Added
- Added 'cart item' component
- Added highlight directive
- Added shared, products, orders, cart modules

### Changed
- Modified style of components
- Changed app component title: now it's set with using ViewChild
- Using hostBinding and HostListener in highlight directive
- cart and product services are used to get and change products and cart values
- implement increase item count, decrease item count, remove item from cart


## [0.0.1] - 2021-09-06
### Added
- Added 'first component'
- Added product and cartItem models
- Added products and cart services to return items for product/cart lists
- Added dummy product component with Buy button and product input
- Added product and cart list, that get and disply items from corresponding service
