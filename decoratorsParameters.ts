export {};

// Use for metadata in the parameter
// targtet class P
// propertyName === key => message
// index => position = 0

function logParameter(target, propertyName, index) {
  const metadatakey = `log_${propertyName}_parameters`;
  if (Array.isArray(target[metadatakey])) {
    target[metadatakey].push(index);
  } else {
    target[metadatakey] = [index];
  }
}

class P {
  greet(@logParameter message: string): string {
    return message;
  }
}

const p: P = new P();
p.greet('Hello');
