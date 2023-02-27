function logs(){
    window.electronAPI.getLogs();
    window.electronAPI.onLogsData((event, rows) => {
        console.log("Contents of the logs table:");
        console.log(rows);
        // Do something with the retrieved rows
    });

    return(
        <div>test</div>
    )
}
export default logs;