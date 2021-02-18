import React, { Component } from "react";

class ImageAnimated extends Component {
  static defaultProps = {
    translateY: false,
  };

  state = {
    loadingEnded: false,
    error: false,
  };
  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            backgroundColor: "#eee",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#e0e0e0",
          }}
        >
          <i className="fas fa-2x fa-images"></i>
        </div>
      );
    }
    return (
      <img
        onLoad={() => {
          this.setState({ loadingEnded: true, error: false });
        }}
        onError={() => {
          this.setState({ loadingEnded: true, error: true });
        }}
        {...this.props}
        src={this.props.src}
        style={{
          transform: this.props.translateY ? (this.state.loadingEnded ? "translateY(0)" : "translateY(10px)") : "none",
          opacity: this.state.loadingEnded ? 1 : 0,
          transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          willChange: "opacity",
          ...this.props.style,
        }}
      />
    );
  }
}

export default ImageAnimated;
