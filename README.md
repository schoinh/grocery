# Grocery Cart (https://bit.ly/33YokbD)

#### _A grocery list Web app with local and cloud storage capabilities using AWS, July 11, 2019_

#### By **Na Hyung Choi, Holden Clark, Emerson Jordan, and Saswati Patra**

## Latest Updates

September 9, 2019 - Bugs found (see Known Bugs below)
August 25, 2019 - New "Clear Completed" button that deletes all items that have been crossed off

## Description

This grocery list app allows the user to add items by category (Produce, Proteins, Other Foods, and Non-Foods. The items then appear on the page, sectioned off by category. The name of each item on the list can be edited, and each item can be deleted from the list. As an alternative to deleting an item, the user can click or tap on the name of an item to cross it out, and click or tap again to un-cross.

A "Clear List" button clears the entire list. A "Clear Completed" button clears the items that have been crossed off by the user.

Every change made to the list is automatically saved to the local storage of the browser, and will be preserved upon refreshing the same page.

If the user wishes to save the list to the cloud, the user can input a name for the list and upload the list. The database for the app resides in a table on AWS DynamoDB. The user can then retrieve their list on any device or browser by inputting the same list name and clicking "Retrieve from Cloud."

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Allows user to enter items by category** | Name: broccoli</br>Category: Produce | Produce: Broccoli |
| **Allows user to modify specific grocery item name** | Click pen icon next to Broccoli and change name to Bok Choy | Produce: Bok Choy |
| **Allows user to delete specific grocery item** | Click "X" icon next to Bok Choy | Produce:  |
| **Allows user to clear all grocery items** | Click "Clear List" | No items in list |
| **Allows user to save grocery list to the cloud** | List Name: Sally</br>Click "Upload" | N/A |
| **Allows user to retrieve grocery list from the cloud** | List Name: Sally</br>Click "Download" | Sally's Grocery List |

## Setup/Installation Requirements

1. Clone this repository:
    ```
    $ git clone https://github.com/schoinh/grocery.git
    ```
2. Install dependencies:
    ```
    $ npm install
    ```
3. Build distribution files:
    ```
    $ npm run build
    ```
4. Open the web page (dist/index.html)

* OR navigate directly to the [live Web page](http://schoinh.github.io/grocery)

## Known Bugs
* When the list gets too long, the buttons at the bottom of the page get pushed off the page, and no scroll bar appears (desktop browsers only -- works fine on mobile browsers). Temporary workaround is to zoom out in desktop browser.
* "Clear Completed" button only clears a few crossed-off items at a time, and having many crossed-off items results in user having to click the "Clear Completed" button multiple times for all crossed-off items to disappear.

## Support and contact details

_If you have any questions, ideas, concerns, or would like to contribute in some way, feel free to contact Na Hyung or leave a comment in this repository._

## Technologies Used
* _AWS - Lambdas, DynamoDB, API Gateway, IAM_
* _Axios, Bootstrap, JavaScript, npm, webpack_

### License

Copyright (c) 2019 **_Na Hyung Choi, Holden Clark, Emerson Jordan, and Saswati Patra_**

This website is licensed under the MIT license.
