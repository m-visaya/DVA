import React from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div className="p-3 bg-palette-white50 dark:bg-palette-gray75 ease-in-out duration-200 hover:bg-palette-white25 hover:dark:bg-palette-gray80 rounded-xl my-2">
        <div onClick={onClick} className="text-palette-gray100 dark:text-palette-gray50 font-bold font-roboto p-2">
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen}
            {isOpen}
          </div>
        </div>
        {isOpen && (
          <div>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;