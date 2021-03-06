import Attributes from '../../types/Attributes';

function buildAttributesField(name, type, attrs) {
  if (Object.keys(attrs).length === 0) {
    return {};
  }
  return {
    attributes: {
      type: new Attributes(name, type, attrs)
    }
  };
}

export default buildAttributesField;
