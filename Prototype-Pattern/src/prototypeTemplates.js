export const fieldPrototype = {
  label: "Untitled",
  type: "text",
  required: false,
};

export const createField = (overrides = {}) => ({
  ...fieldPrototype,
  ...overrides,
});
