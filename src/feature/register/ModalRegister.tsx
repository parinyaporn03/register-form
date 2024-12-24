import type { RootState } from "../../store/store";
import { Button, Modal } from "antd";
import { useSelector } from "react-redux";
import Bello from "../../assets/Bello.png";

interface ModalRegisterProps {
  isOpen: boolean;
  isClose: () => void;
}
const ModalRegister = ({ isOpen, isClose }: ModalRegisterProps) => {
  const { username, password, email } = useSelector(
    (state: RootState) => state.register
  );
  return (
    <Modal
      title="Value From Redux"
      open={isOpen}
      closable={false}
      footer={
        <Button className="w-fit" type="primary" onClick={isClose}>
          Close
        </Button>
      }
      className="modal select-none"
    >
      <div
        className="flex justify-around
       items-center"
      >
        <div>
          <div>
            Username:<span className="px-1 text-orange-500">{username}</span>
          </div>
          <div>
            Email:<span className="px-1 text-orange-500 ">{email}</span>
          </div>
          <div>
            Password:<span className="px-1 text-orange-500">{password}</span>
          </div>
        </div>
        <div className="relative bg-white border-2 border-white p-[5px] rounded-lg">
          <img
            draggable="false"
            src={Bello}
            className="w-24 border-2 border-black  rounded-lg "
          />
          <div className="stamp absolute -top-4 rotate-[29deg] -right-6">
            <div className="text-white">Belloo</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalRegister;
