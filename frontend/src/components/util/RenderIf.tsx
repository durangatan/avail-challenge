import React from 'react';
export default function RenderIf(condition: Boolean, component: React.ReactNode): React.ReactNode {
  return condition ? component : null;
}
