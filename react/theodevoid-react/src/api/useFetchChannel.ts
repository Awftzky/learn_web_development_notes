import { useState } from "react";
import { AxiosInstance } from "../lib/axios";

type ChannelResponse = {
  id: string;
  name: string;
};

const useFetchChannels = () => {
  const [channel, setChannel] = useState<ChannelResponse[]>([]);
  const [channelIsLoading, setChannelIsLoading] = useState(false);
  const [channelError, setChannelError] = useState("");

  const fetchChannel = async () => {
    try {
      setChannelIsLoading(true);
      setChannelError("");
      // const request = await fetch("http://localhost:2000/channel", {
      //   method: "GET",
      // });
      // const response = (await request.json()) as Channel[]; // ARRAY OF OBJECTS

      const response = await AxiosInstance.get<ChannelResponse[]>("/channel");
      // setChannel(response.data);

      // setChannel(response);
    } catch (error) {
      setChannelError((error as TypeError).message);
      // alert(`Error appeared dengan log : ${error}`);
    } finally {
      setChannelIsLoading(false);
    }
  };

  const postChannel = async (payload: string) => {
    setChannelIsLoading(true);
    setChannelError("");
    try {
      await AxiosInstance.post("/channel", {
        name: payload,
      });
    } catch (error) {
      setChannelError((error as TypeError).message);
    } finally {
      setChannelIsLoading(false);
    }
  };

  const updateChannel = async (channelId: string, name: string) => {
    setChannelIsLoading(true);
    setChannelError("");

    try {
      const response = await AxiosInstance.patch<ChannelResponse>(
        `/channel/${channelId}`,
        { name },
      );

      setChannel((currentChannels) =>
        currentChannels.map((channel) =>
          channel.id === channelId ? response.data : channel,
        ),
      );

      return true;
    } catch (error) {
      setChannelError((error as TypeError).message);
      return false;
    } finally {
      setChannelIsLoading(false);
    }
  };

  return {
    channel,
    channelIsLoading,
    channelError,
    fetchChannel,
    postChannel,
    updateChannel,
  };
};

export default useFetchChannels;
