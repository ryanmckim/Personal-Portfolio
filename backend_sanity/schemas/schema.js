// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import abouts from "./abouts";
import works from "./works";
import skills from "./skills";
import experiences from "./experiences";
import testimonials from "./testimonials";
import contact from "./contact";

// Give schema to builder and provide the result to Sanity
export default createSchema({
  // Name of schema
  name: "default",
  types: schemaTypes.concat([
    abouts,
    works,
    skills,
    testimonials,
    experiences,
    contact,
  ]),
});
