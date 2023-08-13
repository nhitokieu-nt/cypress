import { validateSchema } from "./validate-schema-command"
require('cypress-downloadfile/lib/downloadFileCommand');

Cypress.Commands.add('validateSchema', validateSchema)