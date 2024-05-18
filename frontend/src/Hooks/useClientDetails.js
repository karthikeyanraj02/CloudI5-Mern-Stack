import { useState } from "react";
import toast from "react-hot-toast";
import Axios from "../Axios";

export default function useClientRegister() {
  const [loading, setLoading] = useState(false);

  const register = async ({
    name,
    mobileNumber,
    email,
    country,
    state,
    city,
    pincode,
    address,
  }) => {
    const isVaild = inputErrorHandler({
      name,
      mobileNumber,
      email,
      country,
      state,
      city,
      pincode,
      address,
    });
    if (!isVaild) return;
    setLoading(true);
    try {
      const res = await Axios.post("/register", {
        name,
        mobileNumber,
        email,
        country,
        state,
        city,
        pincode,
        address,
      });
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      toast.success("sucessfully registered");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, register };
}

function inputErrorHandler({
  name,
  mobileNumber,
  email,
  country,
  state,
  city,
  pincode,
  address,
}) {
  if (
    !name ||
    !mobileNumber ||
    !email ||
    !country ||
    !state ||
    !city ||
    !pincode ||
    !address
  ) {
    toast.error("Please fill all fields");
    return false;
  }
  if (isNaN(mobileNumber)) {
    toast.error("Please enter valid mobile.no");
    return false;
  }

  if (mobileNumber.length > 10 || mobileNumber.length < 10) {
    toast.error("Please enter valid mobile.no");
    return false;
  }

  return true;
}
