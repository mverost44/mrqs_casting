import React from "react";
import Gallery from "react-grid-gallery";

// function generateImageArr(numImages) {
//   const imgArr = [];
//   for (let i = 0; i < numImages; i++) {
//     imgArr.push({
//       src: `./../assets/Headshots/${i + 1}.jpg`,
//       thumbnail: `./../assets/Headshots/${i + 1}.jpg`,
//       thumbnailWidth: "33%",
//       thumbnailHeight: "auto",
//     });
//   }
//   console.log(imgArr);
//   return imgArr;
// }

const IMAGES = [
  {
    src: `https://cdn2.dropmarkusercontent.com/497521/5c3e40e1aef020d629a1efdabb03729d702c4aa6e4b83046135edfd689f06289/preview/IMG_7185_pp-2.jpg?Expires=1634163142&Signature=iPjVpie4SySDlM-dipeBDymM~yPCPUcrRU~~T4BAeMr4ftoqriMkmWXBp2KXxabLCfTZRma3f1uK3NcCLTUMREwPOIaRDHR5sGqFrBllna1noJxEGRKcLhxwK-OTC0JB8uAoJaO-nYfY~uXXvGTt~JWNSj0DOZKbDi2kVTwF5WYSplP1W-Uk5u1z5eubwTUYgV4HX~A7r~93QUq48TMvUo49yXsZ-mgiMKxOfynZ1dIDv6mgvUSwFMB2MC5WQRZ6Qg2sulprWqLIuVUxpLwMMr2oHb4hA~FFzwkISqhQU8YYEIQwP1P7B0UU8MkQav5YMXqrJLY7AZRcIfgLmZ2wTw__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ`,
    thumbnail: `https://cdn2.dropmarkusercontent.com/497521/5c3e40e1aef020d629a1efdabb03729d702c4aa6e4b83046135edfd689f06289/preview/IMG_7185_pp-2.jpg?Expires=1634163142&Signature=iPjVpie4SySDlM-dipeBDymM~yPCPUcrRU~~T4BAeMr4ftoqriMkmWXBp2KXxabLCfTZRma3f1uK3NcCLTUMREwPOIaRDHR5sGqFrBllna1noJxEGRKcLhxwK-OTC0JB8uAoJaO-nYfY~uXXvGTt~JWNSj0DOZKbDi2kVTwF5WYSplP1W-Uk5u1z5eubwTUYgV4HX~A7r~93QUq48TMvUo49yXsZ-mgiMKxOfynZ1dIDv6mgvUSwFMB2MC5WQRZ6Qg2sulprWqLIuVUxpLwMMr2oHb4hA~FFzwkISqhQU8YYEIQwP1P7B0UU8MkQav5YMXqrJLY7AZRcIfgLmZ2wTw__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ`,
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://cdn2.dropmarkusercontent.com/497521/55ff0b26723838efeaff4c6162031f97e07c23f8c6d82b6e3f80371375639f74/preview/Cityheadshots-19.jpg?Expires=1634164503&Signature=FE07XFzPTV-fVgoRcPArjCPyLvBw0aecdwzWf74mMM62m1mh8TKUgO8Q4WAcPOij-6tOAwwAqJoY46rz7B0VsiTa63xaVkxrK2bE7Pl-ZCjMDoL-wy5qjr0eRlrpkhcKGdjlMtTon2JPEGzkAarV2HYhsmpaJpWyvZzI-lbe5b3-LEmtF9LP40xtYgT69I6L7hK-XLsgu2tF-9LxiZ-PhkQ4rapNCWSpSc0OroGk4Oz1d-Z83DskQF4OmyUW21alH7HplIdWB4r5wbSMEm~rPy3GCr8DaSQPYHrDG1OC5O3ssf810C-UDmQ1U83wHbY4b3dDNO1JVfDcbH5VBcwF5w__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnail:
      "https://cdn2.dropmarkusercontent.com/497521/55ff0b26723838efeaff4c6162031f97e07c23f8c6d82b6e3f80371375639f74/preview/Cityheadshots-19.jpg?Expires=1634164503&Signature=FE07XFzPTV-fVgoRcPArjCPyLvBw0aecdwzWf74mMM62m1mh8TKUgO8Q4WAcPOij-6tOAwwAqJoY46rz7B0VsiTa63xaVkxrK2bE7Pl-ZCjMDoL-wy5qjr0eRlrpkhcKGdjlMtTon2JPEGzkAarV2HYhsmpaJpWyvZzI-lbe5b3-LEmtF9LP40xtYgT69I6L7hK-XLsgu2tF-9LxiZ-PhkQ4rapNCWSpSc0OroGk4Oz1d-Z83DskQF4OmyUW21alH7HplIdWB4r5wbSMEm~rPy3GCr8DaSQPYHrDG1OC5O3ssf810C-UDmQ1U83wHbY4b3dDNO1JVfDcbH5VBcwF5w__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://cdn2.dropmarkusercontent.com/497521/2ed0e0750f5416b4131365df1d55cafd2ad455ef80319fe16771a2c62757d90f/preview/Cityheadshots-3.jpg?Expires=1634164621&Signature=Z5deSOXlqB~Iiizf0tPw5zBqH-YecO6arndxmDMYaGpOM4-mHTqzTZGMTDiMGZ5T~kfIqZJYb1SJaCNaiM5kyi95DU1VkxHvnVJKhQo0-0bRsZ22kq39EYg~0Um7GcjIq441cH1EJOo3klQM02s56JzXC84T3mngw2~EkX36RgZDuF5Xvao5Knf6ZVfckkchZoxCmg461s9SKiKy7g3fPnAChwzufhJuzI-OrrvYY9pGXq22HG2VntwMsSTYaEORDZFDKRzPmETP~81PsQS~ScrN8zV4AP4sOQgi2HbzXGwwRQILsD-0ktUWR0TUB2HWUdYTrFzqwhUQMyTvx0ZE5w__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnail:
      "https://cdn2.dropmarkusercontent.com/497521/2ed0e0750f5416b4131365df1d55cafd2ad455ef80319fe16771a2c62757d90f/preview/Cityheadshots-3.jpg?Expires=1634164621&Signature=Z5deSOXlqB~Iiizf0tPw5zBqH-YecO6arndxmDMYaGpOM4-mHTqzTZGMTDiMGZ5T~kfIqZJYb1SJaCNaiM5kyi95DU1VkxHvnVJKhQo0-0bRsZ22kq39EYg~0Um7GcjIq441cH1EJOo3klQM02s56JzXC84T3mngw2~EkX36RgZDuF5Xvao5Knf6ZVfckkchZoxCmg461s9SKiKy7g3fPnAChwzufhJuzI-OrrvYY9pGXq22HG2VntwMsSTYaEORDZFDKRzPmETP~81PsQS~ScrN8zV4AP4sOQgi2HbzXGwwRQILsD-0ktUWR0TUB2HWUdYTrFzqwhUQMyTvx0ZE5w__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://cdn2.dropmarkusercontent.com/497521/23d181fa069fad0a8f51aecf0d5f6f5719e4abaa4dca6b17ccbcf59aac4a7bbc/preview/Cityheadshots-9.jpg?Expires=1634164643&Signature=c8RAWc2ISFzrwyeurx8nfrV2Z7~0HWKKEQSB6Zy1ELtShfhCRq1ACxsIAONOdq4ynMSrGb2Hec8KeQ4wHlxsTcEMkIBcDN9xaRx1VLYCJnyO13J-fYnK9edFriXPnGtQ8jejMhU1xk33TmLuYsHnkIMzwgsgN~4pSjCDzLjX7J0EzSion1FdvZLR8CvOuBXEbYrPT1asoejCzn~ioeI29JevqkS45ReH1KyNXXcHGBhnUKDvr9QtTP-Xda4d86MMVWP5XIx2pB54ekCfgH3IcxkPgobEpTj7NTDj53qVW9tRiQczmUAB27hVHgZ7mpD-C8e~BmqUzzR41axhsl5o9Q__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnail:
      "https://cdn2.dropmarkusercontent.com/497521/23d181fa069fad0a8f51aecf0d5f6f5719e4abaa4dca6b17ccbcf59aac4a7bbc/preview/Cityheadshots-9.jpg?Expires=1634164643&Signature=c8RAWc2ISFzrwyeurx8nfrV2Z7~0HWKKEQSB6Zy1ELtShfhCRq1ACxsIAONOdq4ynMSrGb2Hec8KeQ4wHlxsTcEMkIBcDN9xaRx1VLYCJnyO13J-fYnK9edFriXPnGtQ8jejMhU1xk33TmLuYsHnkIMzwgsgN~4pSjCDzLjX7J0EzSion1FdvZLR8CvOuBXEbYrPT1asoejCzn~ioeI29JevqkS45ReH1KyNXXcHGBhnUKDvr9QtTP-Xda4d86MMVWP5XIx2pB54ekCfgH3IcxkPgobEpTj7NTDj53qVW9tRiQczmUAB27hVHgZ7mpD-C8e~BmqUzzR41axhsl5o9Q__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://cdn2.dropmarkusercontent.com/497521/53242aca4036d0a8e9ab59392f5e126f0e73872716267bdcc8866d6a1a74dac8/preview/IMG_8146-Enhanced_pp-2.jpg?Expires=1634164676&Signature=N35~dFXjeaWWSo7g~JUNM3zO1tDPR77ZQAEoCdN-E4rIije5EBTALogHRVIYVbnFKhM-~gKahXLLM~u4o0-JKKyryO6Mm5h0WLj8twJfTeJluBp5gLLCx74q0iLJuEEY~KeQUR0I4G47zar-bQoqrzvC9LYsRMnqQkcUStw35scsTnJDNgxxQ1DVw3CgkXL-2EigQB6gJfwd95xGUm6r5vBV-grKZdc4YUCwUgfLSOvuCJL~gXB8kpVJXhh1uOB3AFwfG7FGAVjhPetT5mphlWJuUnuK7nCs7YRJbUAF~H9luLLXmvt7LhROB~mb4Jvfi4SRYOR1gH8KWSverYSimQ__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnail:
      "https://cdn2.dropmarkusercontent.com/497521/53242aca4036d0a8e9ab59392f5e126f0e73872716267bdcc8866d6a1a74dac8/preview/IMG_8146-Enhanced_pp-2.jpg?Expires=1634164676&Signature=N35~dFXjeaWWSo7g~JUNM3zO1tDPR77ZQAEoCdN-E4rIije5EBTALogHRVIYVbnFKhM-~gKahXLLM~u4o0-JKKyryO6Mm5h0WLj8twJfTeJluBp5gLLCx74q0iLJuEEY~KeQUR0I4G47zar-bQoqrzvC9LYsRMnqQkcUStw35scsTnJDNgxxQ1DVw3CgkXL-2EigQB6gJfwd95xGUm6r5vBV-grKZdc4YUCwUgfLSOvuCJL~gXB8kpVJXhh1uOB3AFwfG7FGAVjhPetT5mphlWJuUnuK7nCs7YRJbUAF~H9luLLXmvt7LhROB~mb4Jvfi4SRYOR1gH8KWSverYSimQ__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://cdn2.dropmarkusercontent.com/497521/7f2295fa044f06d64663903def0f87234b463b94f584960b043863745fcfc9cd/preview/Wennieswchin%40gmail.com01.jpg?Expires=1634164715&Signature=eXxsYMV93PDNbTVtxX5WZHPSrkjeU-ojVqi7cDvzzBYqsP2HuntOeLWwXfGWXiplKsB~CCaQ873tifjh2oL1btI04JiHb8uzBHqPbobW4apDN1Vy3qqspJFIzsgRdwxKDjci8yM-1ZCOqBwwV5d4MTYJxXzG3Ib7YzK5cxkN-DcsbD0t27yUiiIY3~sFo5Vm7-ezwNZLJ9VunzOeogrYh3Z-UXeX4GXx~UU3TC5hyJgMS2LYFM623zknSNy0peuAEFwyiYV3UsRN8uhUmfPUlCZ25WD1fqhHwFSSYpfw63epNUBUxQSFA59z5N3OYCj2fm~cVJWS0UZnYekTfRxq7w__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnail:
      "https://cdn2.dropmarkusercontent.com/497521/7f2295fa044f06d64663903def0f87234b463b94f584960b043863745fcfc9cd/preview/Wennieswchin%40gmail.com01.jpg?Expires=1634164715&Signature=eXxsYMV93PDNbTVtxX5WZHPSrkjeU-ojVqi7cDvzzBYqsP2HuntOeLWwXfGWXiplKsB~CCaQ873tifjh2oL1btI04JiHb8uzBHqPbobW4apDN1Vy3qqspJFIzsgRdwxKDjci8yM-1ZCOqBwwV5d4MTYJxXzG3Ib7YzK5cxkN-DcsbD0t27yUiiIY3~sFo5Vm7-ezwNZLJ9VunzOeogrYh3Z-UXeX4GXx~UU3TC5hyJgMS2LYFM623zknSNy0peuAEFwyiYV3UsRN8uhUmfPUlCZ25WD1fqhHwFSSYpfw63epNUBUxQSFA59z5N3OYCj2fm~cVJWS0UZnYekTfRxq7w__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://cdn2.dropmarkusercontent.com/497521/f19ead8a721b1ceb8ea1678cda743d57d377a6f685d2ce959fb115a652620d73/preview/Wennieswchin%40gmail.com03.jpg?Expires=1634164721&Signature=DjXqDDh9japQiSDt91m8Us1TxsGZqN19oyHtTNszgxIUpLtYN3NjuIbNCU7o6zacwPyJnEUf6pnGMK281WA~OP5NjqhJTWEOg1Vxcd~PUP-vbOWFqaAdWTy13-yS2rbZ4g66Cfyad9gvC2wd-n9Lsf6oZZakz-AGOeaMkxdCO6ot162Zajieo0gD3U73vkWVzSG-Qf~Cl6VOQl6GA8Ug5lZAtNHXQzz6aGcIh5CSiRQouL7m7TtpMgozvfWOYJwaSxF~jDLFX9z~frE2CJ0FUpph9qCL1V1lEB9WESRy05Ffz7WpXpPjY4F4HzHBpJo89KmwkXgDvouTr3LviHLBDg__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnail:
      "https://cdn2.dropmarkusercontent.com/497521/f19ead8a721b1ceb8ea1678cda743d57d377a6f685d2ce959fb115a652620d73/preview/Wennieswchin%40gmail.com03.jpg?Expires=1634164721&Signature=DjXqDDh9japQiSDt91m8Us1TxsGZqN19oyHtTNszgxIUpLtYN3NjuIbNCU7o6zacwPyJnEUf6pnGMK281WA~OP5NjqhJTWEOg1Vxcd~PUP-vbOWFqaAdWTy13-yS2rbZ4g66Cfyad9gvC2wd-n9Lsf6oZZakz-AGOeaMkxdCO6ot162Zajieo0gD3U73vkWVzSG-Qf~Cl6VOQl6GA8Ug5lZAtNHXQzz6aGcIh5CSiRQouL7m7TtpMgozvfWOYJwaSxF~jDLFX9z~frE2CJ0FUpph9qCL1V1lEB9WESRy05Ffz7WpXpPjY4F4HzHBpJo89KmwkXgDvouTr3LviHLBDg__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
  {
    src: "https://cdn2.dropmarkusercontent.com/497521/74e60d51f1a021e5fdda6c835f72711ad0c4bfd348c730b179dfebcb25f99069/preview/Wennieswchin%40gmail.com07.jpg?Expires=1634164724&Signature=A8KYi39lIwY6Z0X6C8LscuzhljAXCB0~v-D7hM-dl7NdE9AT2IVSwY2Sta98YDtGsGhmT0vaqmUEZmr4nTH15Vp714pPcWcbvf78RoEPIdlWi4~MHuWTzGGRFd8Vi8sMl4aKfdllv2gOUN1h36M8celTOGuurBtsje6jHRqTaRBEMENJZVx3fWNEmFNmNCuQCNvk3eO~i5yAgLon1HmQaAJSnVT33vKCI041jhebJNqt~VfrV4tne8t~z18JljK4JQqFrKi5mNExuJuDFwmJoFvMEvC7eE~g3U0G247XcE1u0kD~yDMU8Q5wYx1Z0735qzYYlLwtKdVYH9ubDDrfAA__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnail:
      "https://cdn2.dropmarkusercontent.com/497521/74e60d51f1a021e5fdda6c835f72711ad0c4bfd348c730b179dfebcb25f99069/preview/Wennieswchin%40gmail.com07.jpg?Expires=1634164724&Signature=A8KYi39lIwY6Z0X6C8LscuzhljAXCB0~v-D7hM-dl7NdE9AT2IVSwY2Sta98YDtGsGhmT0vaqmUEZmr4nTH15Vp714pPcWcbvf78RoEPIdlWi4~MHuWTzGGRFd8Vi8sMl4aKfdllv2gOUN1h36M8celTOGuurBtsje6jHRqTaRBEMENJZVx3fWNEmFNmNCuQCNvk3eO~i5yAgLon1HmQaAJSnVT33vKCI041jhebJNqt~VfrV4tne8t~z18JljK4JQqFrKi5mNExuJuDFwmJoFvMEvC7eE~g3U0G247XcE1u0kD~yDMU8Q5wYx1Z0735qzYYlLwtKdVYH9ubDDrfAA__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ",
    thumbnailWidth: "33%",
    thumbnailHeight: "auto",
  },
];
export function Photography() {
  return (
    <>
      <h6>Headshots</h6>
      <div className="gallery-container">
        <Gallery enableImageSelection={false} images={IMAGES} />
      </div>
    </>
  );
}
