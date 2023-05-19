// @generated by
//     __             _____     _                 ___ ___ 
//  _ |  |___ ___ ___|   __|___| |_ ___ _____  __| | |_  |
// | |_| |_ -| . |   |__   |  _|   | -_|     ||. |_  |  _|
// |_____|___|___|_|_|_____|___|_|_|___|_|_|_|___| |_|___|
//                                 -- www.JsonSchema42.org

/* eslint-disable */
/* spellchecker: disable */

/**
Core schema meta-schema
*/
export type Schema = ({
    id?: SchemaId;
    $schema?: SchemaSchema;
    title?: SchemaTitle;
    description?: SchemaDescription;
    default?: SchemaDefault;
    multipleOf?: SchemaMultipleOf;
    maximum?: SchemaMaximum;
    exclusiveMaximum?: SchemaExclusiveMaximum;
    minimum?: SchemaMinimum;
    exclusiveMinimum?: SchemaExclusiveMinimum;
    maxLength?: SchemaMaxLength;
    minLength?: SchemaMinLength;
    pattern?: SchemaPattern;
    additionalItems?: SchemaAdditionalItems_561860;
    items?: SchemaItems;
    maxItems?: SchemaMaxItems;
    minItems?: SchemaMinItems;
    uniqueItems?: SchemaUniqueItems;
    maxProperties?: SchemaMaxProperties;
    minProperties?: SchemaMinProperties;
    required?: SchemaRequired;
    additionalProperties?: SchemaAdditionalProperties_478926;
    definitions?: SchemaDefinitions;
    properties?: SchemaProperties;
    patternProperties?: SchemaPatternProperties;
    dependencies?: SchemaDependencies;
    enum?: SchemaEnum;
    type?: SchemaType;
    format?: SchemaFormat;
    allOf?: SchemaAllOf;
    anyOf?: SchemaAnyOf;
    oneOf?: SchemaOneOf;
    not?: SchemaNot;
});
export type SchemaSchemaArray = (SchemaSchemaArrayItems[]);
export type SchemaPositiveInteger = (number);
export type SchemaPositiveIntegerDefault0 = ((SchemaPositiveIntegerDefault00 & SchemaPositiveIntegerDefault01));
export type SchemaSimpleTypes = unknown;
export type SchemaStringArray = (SchemaStringArrayItems[]);
export type SchemaId = (string);
export type SchemaSchema = (string);
export type SchemaTitle = (string);
export type SchemaDescription = (string);
export type SchemaDefault = unknown;
export type SchemaMultipleOf = (number);
export type SchemaMaximum = (number);
export type SchemaExclusiveMaximum = (boolean);
export type SchemaMinimum = (number);
export type SchemaExclusiveMinimum = (boolean);
export type SchemaMaxLength = SchemaPositiveInteger;
export type SchemaMinLength = SchemaPositiveIntegerDefault0;
export type SchemaPattern = (string);
export type SchemaAdditionalItems_561860 = ((Partial<SchemaAdditionalItems0> & Partial<SchemaAdditionalItems1>));
export type SchemaItems = ((Partial<SchemaItems0> & Partial<SchemaItems1>));
export type SchemaMaxItems = SchemaPositiveInteger;
export type SchemaMinItems = SchemaPositiveIntegerDefault0;
export type SchemaUniqueItems = (boolean);
export type SchemaMaxProperties = SchemaPositiveInteger;
export type SchemaMinProperties = SchemaPositiveIntegerDefault0;
export type SchemaRequired = SchemaStringArray;
export type SchemaAdditionalProperties_478926 = ((Partial<SchemaAdditionalProperties0> & Partial<SchemaAdditionalProperties1>));
export type SchemaDefinitions = (Record<string, SchemaDefinitionsAdditionalProperties>);
export type SchemaProperties = (Record<string, SchemaPropertiesAdditionalProperties>);
export type SchemaPatternProperties = (Record<string, SchemaPatternPropertiesAdditionalProperties>);
export type SchemaDependencies = (Record<string, SchemaDependenciesAdditionalProperties>);
export type SchemaEnum = (SchemaEnumAdditionalItems[]);
export type SchemaType = ((Partial<SchemaType0> & Partial<SchemaType1>));
export type SchemaFormat = (string);
export type SchemaAllOf = SchemaSchemaArray;
export type SchemaAnyOf = SchemaSchemaArray;
export type SchemaOneOf = SchemaSchemaArray;
export type SchemaNot = Schema;
export type SchemaAdditionalProperties_778301 = (any);
export type SchemaAdditionalItems_001623 = (any);
export type SchemaSchemaArrayAdditionalProperties = (any);
export type SchemaSchemaArrayItems = Schema;
export type SchemaSchemaArrayAdditionalItems = (any);
export type SchemaSchemaArrayItemsAdditionalProperties = (any);
export type SchemaSchemaArrayItemsAdditionalItems = (any);
export type SchemaPositiveIntegerAdditionalProperties = (any);
export type SchemaPositiveIntegerAdditionalItems = (any);
export type SchemaPositiveIntegerDefault0AdditionalProperties = (any);
export type SchemaPositiveIntegerDefault0AdditionalItems = (any);
export type SchemaPositiveIntegerDefault00 = SchemaPositiveInteger;
export type SchemaPositiveIntegerDefault01 = unknown;
export type SchemaPositiveIntegerDefault00AdditionalProperties = (any);
export type SchemaPositiveIntegerDefault00AdditionalItems = (any);
export type SchemaPositiveIntegerDefault01AdditionalProperties = (any);
export type SchemaPositiveIntegerDefault01AdditionalItems = (any);
export type SchemaSimpleTypesAdditionalProperties = (any);
export type SchemaSimpleTypesAdditionalItems = (any);
export type SchemaStringArrayAdditionalProperties = (any);
export type SchemaStringArrayItems = (string);
export type SchemaStringArrayAdditionalItems = (any);
export type SchemaStringArrayItemsAdditionalProperties = (any);
export type SchemaStringArrayItemsAdditionalItems = (any);
export type SchemaIdAdditionalProperties = (any);
export type SchemaIdAdditionalItems = (any);
export type SchemaSchemaAdditionalProperties = (any);
export type SchemaSchemaAdditionalItems = (any);
export type SchemaTitleAdditionalProperties = (any);
export type SchemaTitleAdditionalItems = (any);
export type SchemaDescriptionAdditionalProperties = (any);
export type SchemaDescriptionAdditionalItems = (any);
export type SchemaDefaultAdditionalProperties = (any);
export type SchemaDefaultAdditionalItems = (any);
export type SchemaMultipleOfAdditionalProperties = (any);
export type SchemaMultipleOfAdditionalItems = (any);
export type SchemaMaximumAdditionalProperties = (any);
export type SchemaMaximumAdditionalItems = (any);
export type SchemaExclusiveMaximumAdditionalProperties = (any);
export type SchemaExclusiveMaximumAdditionalItems = (any);
export type SchemaMinimumAdditionalProperties = (any);
export type SchemaMinimumAdditionalItems = (any);
export type SchemaExclusiveMinimumAdditionalProperties = (any);
export type SchemaExclusiveMinimumAdditionalItems = (any);
export type SchemaMaxLengthAdditionalProperties = (any);
export type SchemaMaxLengthAdditionalItems = (any);
export type SchemaMinLengthAdditionalProperties = (any);
export type SchemaMinLengthAdditionalItems = (any);
export type SchemaPatternAdditionalProperties = (any);
export type SchemaPatternAdditionalItems = (any);
export type SchemaAdditionalItemsAdditionalProperties = (any);
export type SchemaAdditionalItemsAdditionalItems = (any);
export type SchemaAdditionalItems0 = (boolean);
export type SchemaAdditionalItems1 = Schema;
export type SchemaAdditionalItems0AdditionalProperties = (any);
export type SchemaAdditionalItems0AdditionalItems = (any);
export type SchemaAdditionalItems1AdditionalProperties = (any);
export type SchemaAdditionalItems1AdditionalItems = (any);
export type SchemaItemsAdditionalProperties = (any);
export type SchemaItemsAdditionalItems = (any);
export type SchemaItems0 = Schema;
export type SchemaItems1 = SchemaSchemaArray;
export type SchemaItems0AdditionalProperties = (any);
export type SchemaItems0AdditionalItems = (any);
export type SchemaItems1AdditionalProperties = (any);
export type SchemaItems1AdditionalItems = (any);
export type SchemaMaxItemsAdditionalProperties = (any);
export type SchemaMaxItemsAdditionalItems = (any);
export type SchemaMinItemsAdditionalProperties = (any);
export type SchemaMinItemsAdditionalItems = (any);
export type SchemaUniqueItemsAdditionalProperties = (any);
export type SchemaUniqueItemsAdditionalItems = (any);
export type SchemaMaxPropertiesAdditionalProperties = (any);
export type SchemaMaxPropertiesAdditionalItems = (any);
export type SchemaMinPropertiesAdditionalProperties = (any);
export type SchemaMinPropertiesAdditionalItems = (any);
export type SchemaRequiredAdditionalProperties = (any);
export type SchemaRequiredAdditionalItems = (any);
export type SchemaAdditionalPropertiesAdditionalProperties = (any);
export type SchemaAdditionalPropertiesAdditionalItems = (any);
export type SchemaAdditionalProperties0 = (boolean);
export type SchemaAdditionalProperties1 = Schema;
export type SchemaAdditionalProperties0AdditionalProperties = (any);
export type SchemaAdditionalProperties0AdditionalItems = (any);
export type SchemaAdditionalProperties1AdditionalProperties = (any);
export type SchemaAdditionalProperties1AdditionalItems = (any);
export type SchemaDefinitionsAdditionalProperties = Schema;
export type SchemaDefinitionsAdditionalItems = (any);
export type SchemaDefinitionsAdditionalPropertiesAdditionalProperties = (any);
export type SchemaDefinitionsAdditionalPropertiesAdditionalItems = (any);
export type SchemaPropertiesAdditionalProperties = Schema;
export type SchemaPropertiesAdditionalItems = (any);
export type SchemaPropertiesAdditionalPropertiesAdditionalProperties = (any);
export type SchemaPropertiesAdditionalPropertiesAdditionalItems = (any);
export type SchemaPatternPropertiesAdditionalProperties = Schema;
export type SchemaPatternPropertiesAdditionalItems = (any);
export type SchemaPatternPropertiesAdditionalPropertiesAdditionalProperties = (any);
export type SchemaPatternPropertiesAdditionalPropertiesAdditionalItems = (any);
export type SchemaDependenciesAdditionalProperties = ((Partial<SchemaDependenciesAdditionalProperties0> & Partial<SchemaDependenciesAdditionalProperties1>));
export type SchemaDependenciesAdditionalItems = (any);
export type SchemaDependenciesAdditionalPropertiesAdditionalProperties = (any);
export type SchemaDependenciesAdditionalPropertiesAdditionalItems = (any);
export type SchemaDependenciesAdditionalProperties0 = Schema;
export type SchemaDependenciesAdditionalProperties1 = SchemaStringArray;
export type SchemaDependenciesAdditionalProperties0AdditionalProperties = (any);
export type SchemaDependenciesAdditionalProperties0AdditionalItems = (any);
export type SchemaDependenciesAdditionalProperties1AdditionalProperties = (any);
export type SchemaDependenciesAdditionalProperties1AdditionalItems = (any);
export type SchemaEnumAdditionalProperties = (any);
export type SchemaEnumAdditionalItems = (any);
export type SchemaTypeAdditionalProperties = (any);
export type SchemaTypeAdditionalItems = (any);
export type SchemaType0 = SchemaSimpleTypes;
export type SchemaType1 = (SchemaType1Items[]);
export type SchemaType0AdditionalProperties = (any);
export type SchemaType0AdditionalItems = (any);
export type SchemaType1AdditionalProperties = (any);
export type SchemaType1Items = SchemaSimpleTypes;
export type SchemaType1AdditionalItems = (any);
export type SchemaType1ItemsAdditionalProperties = (any);
export type SchemaType1ItemsAdditionalItems = (any);
export type SchemaFormatAdditionalProperties = (any);
export type SchemaFormatAdditionalItems = (any);
export type SchemaAllOfAdditionalProperties = (any);
export type SchemaAllOfAdditionalItems = (any);
export type SchemaAnyOfAdditionalProperties = (any);
export type SchemaAnyOfAdditionalItems = (any);
export type SchemaOneOfAdditionalProperties = (any);
export type SchemaOneOfAdditionalItems = (any);
export type SchemaNotAdditionalProperties = (any);
export type SchemaNotAdditionalItems = (any);
