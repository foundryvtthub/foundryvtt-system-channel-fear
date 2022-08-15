/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/channel-fear/templates/actor/parts/actor-abilities.hbs',
    'systems/channel-fear/templates/actor/parts/actor-specialties.hbs',
    'systems/channel-fear/templates/actor/parts/actor-right-part.hbs',
    'systems/channel-fear/templates/actor/parts/actor-weapons.hbs',
  ]);
};
