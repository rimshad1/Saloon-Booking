"use client";

import * as StyleX from "@stylexjs/stylex";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import Filter from "../../../../public/assets/filter.svg";
import Down from "../../../../public/assets/down.svg";
import Booking from "../../../../public/assets/Booking.svg";
import Eye from "../../../../public/assets/eyeOpen.svg";

const Page = () => {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<boolean[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [eventName, setEventName] = useState("");
  const selectedCount = selectedItems.filter(Boolean).length;

  const [bookingData, setBookingData] = useState();

  const router = useRouter();

  const handleViewClick = () => {
    router.push("/dashboard/bookings/bookingDetails");
  };

  return (
    <>
      <div {...StyleX.props(x.main)}>
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          ></div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            overflowY: "scroll",
          }}
        >
          <table {...StyleX.props(x.tableContainer)}>
            <thead {...StyleX.props(x.tableHead)}>
              <tr>
                <th {...StyleX.props(x.thItem)}></th>
                <th {...StyleX.props(x.thItem)}>BookingID</th>
                <th {...StyleX.props(x.thItem)}>Saloon Name</th>
                <th {...StyleX.props(x.thItem)}>User Name</th>
                <th {...StyleX.props(x.thItem)}>Saloon Address</th>
              </tr>
            </thead>
            <tbody>
              <tr
              //{...StyleX.props(isChecked ? x.tableRowAlt : x.tableRow)}
              >
                <td {...StyleX.props(x.tableData)} style={{ width: "2%" }}></td>
                <td {...StyleX.props(x.tableData)}>booking</td>
                <td {...StyleX.props(x.tableData)}>Booking Name</td>
                <td {...StyleX.props(x.tableData)}>Booking User Name</td>
                <td {...StyleX.props(x.tableData)}>Booking Payment</td>
                <td {...StyleX.props(x.tableData)}>
                  <button
                    {...StyleX.props(x.viewButtonAlt)}
                    onClick={handleViewClick}
                  >
                    <Image src={Eye} alt="" width={22} height={22} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {showDropdown && (
          <div {...StyleX.props(x.dropdown)}>
            <form {...StyleX.props(x.dropdownContent)}>
              <div {...StyleX.props(x.inputRow)}>
                <label {...StyleX.props(x.label)}>From Date </label>
                <input
                  type="date"
                  {...StyleX.props(x.inputField, x.fromDateInputField)}
                  style={{ width: "234px", height: "48px" }}
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>
              <div {...StyleX.props(x.inputRow)}>
                <label {...StyleX.props(x.label)}>To Date </label>
                <input
                  type="date"
                  {...StyleX.props(x.inputField, x.toDateInputField)}
                  style={{ width: "234px", height: "48px" }}
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
              <div {...StyleX.props(x.inputRow)}>
                <label {...StyleX.props(x.label)}>Event Name</label>
                <div {...StyleX.props(x.selectContainer)}>
                  <select
                    {...StyleX.props(x.inputField, x.customSelect)}
                    style={{ width: "234px", height: "48px" }}
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  >
                    <option value="">Select Event</option>
                    <option value="Choose your career">
                      Choose your career
                    </option>
                    <option value="Music">Music</option>
                    <option value="Dance">Dance</option>
                    <option value="Opera">Opera</option>
                  </select>
                  <Image
                    src={Down}
                    alt=""
                    width={22}
                    height={22}
                    {...StyleX.props(x.dropdownIcon)}
                  />
                </div>
              </div>
              <button type="submit" {...StyleX.props(x.button)}>
                Search
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

const x = StyleX.create({
  centerChild: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    gap: 20,
    justifyContent: "start",
    display: "flex",
    alignItems: "center",
  },
  tableContainer: {
    marginTop: 10,
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHead: {
    height: 50,
    fontWeight: 600,
    backgroundColor: "#fff",
    boxShadow: " 0 0 5px 0 #00000025",
    borderBottom: "1px solid #999",
  },
  thItem: {
    padding: "10px",
    fontSize: 14,
    textAlign: "left",
  },
  tableData: {
    padding: "10px",
    fontSize: 14,
    textAlign: "left",
  },
  tableRow: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #d9d9d9",
  },
  tableRowAlt: {
    backgroundColor: "#F5C100",
    borderBottom: "1px solid #d9d9d9",
  },
  fromDateInputField: {
    marginLeft: "12px",
  },
  toDateInputField: {
    marginLeft: "32px",
  },
  selectContainer: {
    position: "relative",
    display: "inline-block",
    width: "220px",
  },
  customSelect: {
    appearance: "none",
    backgroundColor: "#fff",
    position: "relative",
    paddingRight: "30px",
  },
  dropdown: {
    width: "400px",
    height: "300px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    position: "absolute",
    left: "80%",
    transform: "translateX(-40%)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "90px",
    padding: "10px",
  },
  dropdownContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "20px",
  },
  inputRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  label: {
    fontWeight: "bold",
  },
  inputField: {
    width: "200px",
    height: "48px",
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 1)",
    padding: "10px",
    fontWeight: 400,
    fontSize: "18px",
    color: "rgba(0, 0, 0, 1)",
  },
  dropdownIcon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },
  filterButton: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#ffffff",
    border: "2px solid rgba(0, 0, 0, 1)",
    borderRadius: "8px",

    fontWeight: 700,
    fontSize: "16px",
    color: "rgba(0, 0, 0, 1)",
    padding: "10px",
    cursor: "pointer",
  },
  button: {
    width: "194px",
    height: "54px",
    backgroundColor: "#000435",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "18px",
    color: "#ffffff",
    cursor: "pointer",
    alignSelf: "center",
    marginTop: "20px",
    border: "none",
  },
  // searchInputWrapper: {
  //   position: "relative",
  //   display: "flex",
  //   alignItems: "center",
  //   width: "100%",
  // },
  // searchIcon: {
  //   position: "absolute",
  //   right: "10px",
  //   top: "50%",
  //   transform: "translateY(-50%)",
  //   pointerEvents: "none",
  //   color: "#ccc",
  // },
  filterDropdown: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #00000025",
    cursor: "pointer",
    fontWeight: 700,
  },
  viewButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    background: {
      default: "#D9D9D9",
      ":hover": "#000",
    },
    color: {
      default: "#000",
      ":hover": "#fff",
    },
    padding: "5px 10px",
    border: "1px solid #00000025",
    outline: "none",
    cursor: "pointer",
    borderRadius: 8,
    fontWeight: 700,
  },
  viewButtonAlt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    background: {
      default: "#fff",
      ":hover": "#000",
    },
    color: {
      default: "#000",
      ":hover": "#fff",
    },
    padding: "5px 10px",
    border: "1px solid #00000025",
    outline: "none",
    cursor: "pointer",
    borderRadius: 8,
    fontWeight: 700,
  },
});

export default Page;
