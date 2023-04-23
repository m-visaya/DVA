import React from 'react';
import PropTypes from 'prop-types';

import AccordionSection from './accordionSection';

class Accordion extends React.Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);

    const openSections = {};

    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }

  onClick = label => {
    const {
      props: { allowMultipleOpen },
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div className="w-full">
          {children.map(child => (
            <AccordionSection
              isOpen={!!openSections[child.props.label]}
              label={child.props.label}
              onClick={onClick}
            >
              <div className="p-2 text-palette-gray100 dark:text-palette-gray50 font-roboto text-[10pt] rounded-xl">
                {child.props.children}
              </div>
            </AccordionSection>
          ))}
      </div>
    );
  }
}

export default Accordion;