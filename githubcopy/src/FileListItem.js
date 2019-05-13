import React from 'react';
import PropTypes from 'prop-types';
import Time from './Time';
import CommitMessage from './CommitMessage';
import FileName from './FileName';

function FileListItem({ file }) {
    return (
        <tr className="file-list-item">
            <td>
                <FileName file={file} />
            </td>
            <td>
                <CommitMessage file={file.latestCommit} />
            </td>
            <td>
                <Time />
            </td>
        </tr>
    );
}
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileListItem;
