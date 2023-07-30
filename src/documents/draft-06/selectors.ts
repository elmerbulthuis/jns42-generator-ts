import { Draft06Schema } from "@jns42/jns42-schema-draft-06";

//#region core

export function selectNodeSchema(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.$schema;
	}
}

export function selectNodeId(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.$id;
	}
}

export function selectNodeRef(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.$ref;
	}
}

export function selectNodeDescription(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.description;
	}
}

export function selectNodeTitle(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.title;
	}
}

export function selectNodeExamples(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.examples;
	}
}

//#endregion

//#region schema

export function* selectSubNodeDefinitionsEntries(
	nodePointer: string,
	node: Draft06Schema,
) {
	if (typeof node === "object" && node.definitions != null) {
		for (const [key, subNode] of Object.entries(node.definitions)) {
			const subNodePointer = [nodePointer, "definitions", key].join("/");
			yield [subNodePointer, subNode] as const;
		}
	}
}

export function* selectSubNodePropertyEntries(
	nodePointer: string,
	node: Draft06Schema,
) {
	if (typeof node === "object" && node.properties != null) {
		for (const [key, subNode] of Object.entries(node.properties)) {
			const subNodePointer = [nodePointer, "properties", key].join("/");
			yield [subNodePointer, subNode] as const;
		}
	}
}

export function* selectSubNodeAdditionalPropertiesEntries(
	nodePointer: string,
	node: Draft06Schema,
) {
	if (typeof node === "object" && node.additionalProperties != null) {
		const subNode = node.additionalProperties;
		const subNodePointer = [nodePointer, "additionalProperties"].join("/");
		yield [subNodePointer, subNode] as const;
	}
}

export function* selectSubNodeItemsOneEntries(
	nodePointer: string,
	node: Draft06Schema,
) {
	if (
		typeof node === "object" &&
		node.items != null &&
		!Array.isArray(node.items)
	) {
		const subNode = node.items;
		const subNodePointer = [nodePointer, "items"].join("/");
		yield [subNodePointer, subNode] as const;
	}
}

export function* selectSubNodeItemsManyEntries(
	nodePointer: string,
	node: Draft06Schema,
) {
	if (
		typeof node === "object" &&
		node.items != null &&
		Array.isArray(node.items)
	) {
		for (const [key, subNode] of Object.entries(node.items)) {
			const subNodePointer = [nodePointer, "items", key].join("/");
			yield [subNodePointer, subNode] as [string, Draft06Schema];
		}
	}
}

export function* selectSubNodeAdditionalItemsEntries(
	nodePointer: string,
	node: Draft06Schema,
) {
	if (typeof node === "object" && node.additionalItems != null) {
		const subNode = node.additionalItems;
		const subNodePointer = [nodePointer, "additionalItems"].join("/");
		yield [subNodePointer, subNode] as const;
	}
}

export function* selectSubNodeAnyOfEntries(
	nodePointer: string,
	node: Draft06Schema,
) {
	if (typeof node === "object" && node.anyOf != null) {
		for (const [key, subNode] of Object.entries(node.anyOf)) {
			const subNodePointer = [nodePointer, "anyOf", key].join("/");
			yield [subNodePointer, subNode] as [string, Draft06Schema];
		}
	}
}

export function* selectSubNodeOneOfEntries(
	nodePointer: string,
	node: Draft06Schema,
) {
	if (typeof node === "object" && node.oneOf != null) {
		for (const [key, subNode] of Object.entries(node.oneOf)) {
			const subNodePointer = [nodePointer, "oneOf", key].join("/");
			yield [subNodePointer, subNode] as [string, Draft06Schema];
		}
	}
}

export function* selectSubNodeAllOfEntries(
	nodePointer: string,
	node: Draft06Schema,
) {
	if (typeof node === "object" && node.allOf != null) {
		for (const [key, subNode] of Object.entries(node.allOf)) {
			const subNodePointer = [nodePointer, "allOf", key].join("/");
			yield [subNodePointer, subNode] as [string, Draft06Schema];
		}
	}
}

export function* selectSubNodes(
	nodePointer: string,
	node: Draft06Schema,
): Iterable<readonly [string, Draft06Schema]> {
	yield* selectSubNodeDefinitionsEntries(nodePointer, node);
	yield* selectSubNodePropertyEntries(nodePointer, node);
	yield* selectSubNodeAdditionalPropertiesEntries(nodePointer, node);
	yield* selectSubNodeItemsOneEntries(nodePointer, node);
	yield* selectSubNodeItemsManyEntries(nodePointer, node);
	yield* selectSubNodeAdditionalItemsEntries(nodePointer, node);
	yield* selectSubNodeAllOfEntries(nodePointer, node);
	yield* selectSubNodeAnyOfEntries(nodePointer, node);
	yield* selectSubNodeOneOfEntries(nodePointer, node);
}

//#endregion

//#region type

export function selectNodeTypes(node: Draft06Schema) {
	if (typeof node === "object" && node.type != null) {
		if (Array.isArray(node.type)) {
			return node.type;
		} else {
			return [node.type];
		}
	}
}

export function* selectNodeRequiredProperties(node: Draft06Schema) {
	if (typeof node === "object" && node.required != null) {
		yield* node.required;
	}
}

export function* selectNodePropertyNamesEntries(
	nodePointer: string,
	node: Draft06Schema,
) {
	if (typeof node === "object" && node.properties != null) {
		for (const propertyName of Object.keys(node.properties)) {
			const subNodePointer = [nodePointer, "properties", propertyName].join(
				"/",
			);
			yield [subNodePointer, propertyName] as const;
		}
	}
}

export function selectNodeEnum(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.enum;
	}
}

//#endregion

//#region validation

export function selectValidationMaximumProperties(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.maxProperties;
	}
}

export function selectValidationMinimumProperties(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.minProperties;
	}
}

export function selectValidationRequired(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.required;
	}
}

export function selectValidationMinimumItems(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.minItems;
	}
}

export function selectValidationMaximumItems(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.maxItems;
	}
}

export function selectValidationUniqueItems(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.uniqueItems;
	}
}

export function selectValidationMinimumLength(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.minLength;
	}
}

export function selectValidationMaximumLength(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.maxLength;
	}
}

export function selectValidationValuePattern(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.pattern;
	}
}

export function selectValidationMinimumInclusive(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.minimum;
	}
}

export function selectValidationMinimumExclusive(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.exclusiveMinimum;
	}
}

export function selectValidationMaximumInclusive(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.maximum;
	}
}

export function selectValidationMaximumExclusive(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.exclusiveMaximum;
	}
}

export function selectValidationMultipleOf(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.multipleOf;
	}
}

export function selectValidationEnum(node: Draft06Schema) {
	if (typeof node === "object") {
		return node.enum;
	}
}

//#endregion