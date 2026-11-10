import { useState, type FormEvent } from "react";
import useFetchChannels from "../api/useFetchChannel";
import { AxiosInstance } from "../lib/axios";

const ChannelsPage = () => {
  const [inputText, setInputText] = useState("");
  const {
    channel,
    channelError,
    channelIsLoading,
    fetchChannel,
    postChannel,
    updateChannel,
  } = useFetchChannels();
  const [deleteChannelIsLoading, setDeleteChannelIsLoading] = useState(false);
  const [deleteChannelError, setDeleteChannelError] = useState("");
  const [selectedEditChannel, setSelectedEditChannel] = useState<string | null>(
    null,
  );
  const [editChannelName, setEditChannelName] = useState("");

  const handleChannelInput = () => {
    postChannel(inputText);
  };

  const startEditingChannel = (channelId: string, channelName: string) => {
    setSelectedEditChannel(channelId);
    setEditChannelName(channelName);
  };

  const handleEditChannel = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedName = editChannelName.trim();
    if (!selectedEditChannel || !updatedName) return;

    const wasUpdated = await updateChannel(selectedEditChannel, updatedName);
    if (wasUpdated) {
      setSelectedEditChannel(null);
      setEditChannelName("");
    }
  };

  const deleteChannel = async (channelId: string) => {
    try {
      setDeleteChannelIsLoading(true);
      await AxiosInstance.delete(`/channel/${channelId}`);
    } catch (error) {
      setDeleteChannelError((error as TypeError).message);
    } finally {
      setDeleteChannelIsLoading(false);
    }
  };
  return (
    <div>
      <h1>Youtube Channel Page</h1>
      <div className="channel-table-wrapper">
        <table className="channel-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {channel.map((channel) => {
              return (
                <tr key={channel.id}>
                  <td>{channel.id}</td>
                  <td>{channel.name}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        startEditingChannel(channel.id, channel.name)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      disabled={deleteChannelIsLoading}
                      onClick={() => deleteChannel(channel.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {selectedEditChannel && (
        <form className="channel-edit-form" onSubmit={handleEditChannel}>
          <label className="channel-edit-field" htmlFor="edit-channel-name">
            Nama channel
            <input
              id="edit-channel-name"
              type="text"
              value={editChannelName}
              onChange={(event) => setEditChannelName(event.target.value)}
              required
            />
          </label>
          <button type="submit" disabled={channelIsLoading}>
            Simpan perubahan
          </button>
          <button
            type="button"
            disabled={channelIsLoading}
            onClick={() => {
              setSelectedEditChannel(null);
              setEditChannelName("");
            }}
          >
            Batal
          </button>
        </form>
      )}
      <label>
        Insert Data :
        <input
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
      </label>
      <button
        type="button"
        disabled={channelIsLoading}
        onClick={handleChannelInput}
      >
        Input Data
      </button>
      <button type="button" disabled={channelIsLoading} onClick={fetchChannel}>
        Fetch Data
      </button>
      {channelIsLoading ? <p>Is Loading...</p> : null}
      {channelError && <p style={{ color: "red" }}>{channelError}</p>}
      {deleteChannelError && (
        <p style={{ color: "red" }}>{deleteChannelError}</p>
      )}
    </div>
  );
};

export default ChannelsPage;
