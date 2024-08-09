import React from "react";

const WithLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      const componentName = WrappedComponent.name || "Component";
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.name || "Component";
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

WithLogging.displayName = (WrappedComponent) =>
  `WithLogging(${WrappedComponent.name || "Component"})`;

export default WithLogging;
