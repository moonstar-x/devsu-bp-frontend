# Devsu BP Frontend

This repository contains my solution for the BP Frontend assessment.

## Development

For development, make sure to use at least [Node v18.17.1](https://nodejs.org/en) which is the LTS at the time of writing.

Clone this repository:

```text
git clone https://github.com/moonstar-x/devsu-bp-frontend
```

And install the dependencies:

```text
npm install
```

Make sure to have an `.env` file with the appropriate values. For the sake of simplicity, the `.env` file is included in
this repository, although, it should technically not be tracked.

This `.env` file should contain the following values:

```text
VITE_API_URL=API_URL_HERE
VITE_ACCOUNT_ID=15
```

> You can choose any number from 1 to 500 as the account id. In this case, I went with the value `15`.

You can now start the development server:

```text
npm run dev
```

This will open a development server on port `5173`.

## Building

To compile the production build for the app, run:

```text
npm run build
```

This will create a `build` folder with the application's artifacts in there.

## Available Scripts

The package contains the following scripts:

#### `npm run dev`

Start up the development server.

#### `npm run lint`

Run the linter to see code style errors.

#### `npm run lint:fix`

Fixes any automatically fixable code style errors.

#### `npm run test`

Run all test files once.

#### `npm run test:watch`

Run the test runner in watch mode, which re-runs the relevant tests when files are updated.

#### `npm run build`

Build project files once.

## Test Coverage

Reported Jest test coverage:

```text
------------------------------------------------|---------|----------|---------|---------|---------------------
File                                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s   
------------------------------------------------|---------|----------|---------|---------|---------------------
All files                                       |   85.36 |    57.25 |   59.02 |   84.32 |                     
 components/common/asyncWrapper                 |     100 |      100 |     100 |     100 |                     
  AsyncWrapper.tsx                              |     100 |      100 |     100 |     100 |                     
 components/common/avatar                       |     100 |       75 |      50 |     100 |                     
  Avatar.tsx                                    |     100 |       75 |     100 |     100 | 11                  
  index.ts                                      |     100 |      100 |       0 |     100 |                     
 components/common/box                          |     100 |      100 |     100 |     100 |                     
  Box.tsx                                       |     100 |      100 |     100 |     100 |                     
 components/common/button                       |     100 |      100 |     100 |     100 |                     
  Button.tsx                                    |     100 |      100 |     100 |     100 |                     
  LinkButton.tsx                                |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |     100 |     100 |                     
  shared.ts                                     |     100 |      100 |     100 |     100 |                     
 components/common/dropdown                     |   68.08 |     7.69 |   27.27 |   63.63 |                     
  Dropdown.tsx                                  |   70.83 |    14.28 |   16.66 |    64.7 | 18-19,25-26,30,40   
  DropdownItem.tsx                              |      40 |        0 |       0 |   42.85 | 10-16               
  DropdownTrigger.tsx                           |   81.81 |        0 |      50 |      75 | 12-13               
  index.ts                                      |     100 |      100 |     100 |     100 |                     
 components/common/errorMessage                 |     100 |      100 |     100 |     100 |                     
  ErrorMessage.tsx                              |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |     100 |     100 |                     
 components/common/form/form                    |     100 |      100 |     100 |     100 |                     
  Form.tsx                                      |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |     100 |     100 |                     
 components/common/form/formActions             |     100 |      100 |     100 |     100 |                     
  FormActions.tsx                               |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |     100 |     100 |                     
 components/common/form/formBox                 |     100 |       50 |     100 |     100 |                     
  FormBox.tsx                                   |     100 |       50 |     100 |     100 | 14                  
 components/common/form/formFieldGroup          |     100 |      100 |     100 |     100 |                     
  FormFieldGroup.tsx                            |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |     100 |     100 |                     
 components/common/form/formInput               |     100 |       75 |     100 |     100 |                     
  FormInput.tsx                                 |     100 |       75 |     100 |     100 | 25                  
  index.ts                                      |     100 |      100 |     100 |     100 |                     
 components/common/loading                      |     100 |      100 |     100 |     100 |                     
  Loading.tsx                                   |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |     100 |     100 |                     
 components/common/logo                         |     100 |      100 |      75 |     100 |                     
  Logo.tsx                                      |     100 |      100 |     100 |     100 |                     
  LogoHeader.tsx                                |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |      50 |     100 |                     
 components/common/modal/modal                  |     100 |      100 |      50 |     100 |                     
  Modal.tsx                                     |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |       0 |     100 |                     
 components/common/modal/modalCard              |     100 |      100 |      50 |     100 |                     
  ModalCard.tsx                                 |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |       0 |     100 |                     
 components/common/modal/modalCardActions       |     100 |      100 |      50 |     100 |                     
  ModalCardActions.tsx                          |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |       0 |     100 |                     
 components/common/modal/modalCardBody          |     100 |      100 |      50 |     100 |                     
  ModalCardBody.tsx                             |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |       0 |     100 |                     
 components/common/pageWrapper                  |     100 |      100 |     100 |     100 |                     
  PageWrapper.tsx                               |     100 |      100 |     100 |     100 |                     
 components/common/pagination                   |     100 |       75 |     100 |     100 |                     
  Pagination.tsx                                |     100 |       75 |     100 |     100 | 20-32               
  index.ts                                      |     100 |      100 |     100 |     100 |                     
 components/common/table/table                  |     100 |      100 |     100 |     100 |                     
  Table.tsx                                     |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |     100 |     100 |                     
 components/common/table/tableBody              |     100 |      100 |     100 |     100 |                     
  TableBody.tsx                                 |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |     100 |     100 |                     
 components/common/table/tableHead              |     100 |      100 |     100 |     100 |                     
  TableHead.tsx                                 |     100 |      100 |     100 |     100 |                     
  index.ts                                      |     100 |      100 |     100 |     100 |                     
 components/hooks                               |      70 |        0 |   33.33 |    62.5 |                     
  api.tsx                                       |      60 |        0 |       0 |      50 | 7-8,12,19-25        
  pageTitle.tsx                                 |     100 |      100 |     100 |     100 |                     
 components/router                              |      70 |      100 |    8.33 |   84.61 |                     
  Router.tsx                                    |   64.28 |      100 |       0 |   88.88 | 11                  
  index.ts                                      |     100 |      100 |      50 |     100 |                     
  routes.ts                                     |      50 |      100 |       0 |      50 | 4                   
 components/specific/product/deleteProductModal |   47.82 |      100 |       0 |      50 |                     
  DeleteProductModal.tsx                        |   42.85 |      100 |       0 |   47.36 | 16-34               
  index.ts                                      |     100 |      100 |       0 |     100 |                     
 components/specific/product/productForm        |   82.95 |    59.45 |   41.66 |   81.81 |                     
  CreateProductForm.tsx                         |   71.42 |        0 |   33.33 |   72.72 | 15-17               
  EditProductForm.tsx                           |   78.94 |        0 |   33.33 |   78.57 | 17-19               
  ProductFormLogic.tsx                          |   78.26 |      100 |   33.33 |      75 | 25-31               
  ProductFormView.tsx                           |   93.75 |    75.86 |   66.66 |      92 | 40-41               
 components/specific/product/productTable       |   47.36 |        0 |      20 |   53.48 |                     
  ProductTable.tsx                              |   91.66 |      100 |   66.66 |      90 | 38                  
  ProductTableRow.tsx                           |      40 |      100 |       0 |    62.5 | 12-15               
  ProductTableRowMenu.tsx                       |   33.33 |        0 |       0 |      36 | 17-47               
 components/specific/search/paginationBar       |   88.46 |    83.33 |      50 |   84.21 |                     
  PaginationBar.tsx                             |   88.46 |    83.33 |      50 |   84.21 | 28,32-33            
 components/specific/search/searchBar           |    90.9 |        0 |      50 |   88.88 |                     
  SearchBar.tsx                                 |    90.9 |        0 |      50 |   88.88 | 13                  
 services/api/client                            |   90.54 |       50 |      75 |   88.88 |                     
  Client.ts                                     |   94.44 |      100 |      75 |   94.11 | 42                  
  ProductService.ts                             |   89.28 |       40 |      75 |   86.95 | 54-55,81-82,103-104 
 services/api/errors                            |    92.3 |    72.22 |      75 |    90.9 |                     
  RequestError.ts                               |    92.3 |    72.22 |      75 |    90.9 | 13                  
 services/api/models                            |     100 |      100 |     100 |     100 |                     
  product.ts                                    |     100 |      100 |     100 |     100 |                     
 services/api/schemas                           |     100 |      100 |     100 |     100 |                     
  product.ts                                    |     100 |      100 |     100 |     100 |                     
------------------------------------------------|---------|----------|---------|---------|---------------------
```
