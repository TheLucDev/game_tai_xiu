import React, { Component } from "react";
import { connect } from "react-redux";
import { TAI, XIU } from "../redux/constants/xucXacConstant";

let styles = {
  btnXucXac: {
    width: "150px",
    height: "150px",
  },
};

class XucXac extends Component {
  render() {
    console.log(this.props.xucXacReducer);
    return (
      <div className="p-5 container">
        <p className="display-4 text-center">Kết quả trò chơi</p>
        <div className="d-flex justify-content-between">
          <button
            onClick={() => {
              this.props.setLuaChon(TAI);
            }}
            style={styles.btnXucXac}
            className="btn btn-danger"
          >
            Tài
          </button>
          <div>
            {this.props.xucXacReducer?.map((item) => {
              return (
                <img
                  alt=""
                  src={item.hinhAnh}
                  style={{ width: "50px", height: "50px" }}
                />
              );
            })}
          </div>
          <button
            onClick={() => {
              this.props.setLuaChon(XIU);
            }}
            style={styles.btnXucXac}
            className="btn btn-dark"
          >
            Xỉu
          </button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    xucXacReducer: state.xucXacReducer.mangXucXac,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setLuaChon: (luaChon) => {
      dispatch({
        type: luaChon,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
