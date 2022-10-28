/**
 * Design Tokens
 * Autogenerated from tokens.json.
 * DO NOT EDIT!
 */

export const tokens = {
  border: {
    color: '#0d0300',
    width: '1px',
    style: 'solid',
  },
};

export const meta = {
  border: {
    '_original': {
      '$type': 'border',
      '$value': {
        color: '#0d0300',
        width: '1px',
        style: 'solid',
      },
      '$extensions': {
        mode: {
          light: {
            color: '#0d0300',
            width: '1px',
            style: 'solid',
          },
          dark: {
            color: '#ffffff',
            width: '1px',
            style: 'solid',
          },
        },
      },
    },
    '_group': {
      id: '.',
      '$extensions': {
        requiredModes: [],
      },
    },
    '$type': 'border',
    '$value': {
      color: '#0d0300',
      width: '1px',
      style: 'solid',
    },
    '$extensions': {
      mode: {
        light: {
          color: '#0d0300',
          width: '1px',
          style: 'solid',
        },
        dark: {
          color: '#ffffff',
          width: '1px',
          style: 'solid',
        },
      },
    },
  },
};

export const modes = {
  border: {
    light: {
      color: '#0d0300',
      width: '1px',
      style: 'solid',
    },
    dark: {
      color: '#ffffff',
      width: '1px',
      style: 'solid',
    },
  },
};

/** Get individual token */
export function token(tokenID, modeName) {
  if (modeName && modes[tokenID] && modeName in modes[tokenID]) return modes[tokenID][modeName];
  return tokens[tokenID];
}