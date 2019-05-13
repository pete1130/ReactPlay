import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import Time from './time';

function FileList({ files }) {
    return (
        <table className="file-list">
            <tbody>
                {files.map(file => (
                    <FileListItem key={file.id} file={file} />
                ))}
            </tbody>
        </table>
    );
}
FileList.propTypes = {
    files: PropTypes.array
};

function FileListItem({ file }) {
    return (
        <tr className="file-list-item">
            <FileName file={file} />
            <CommitMessage file={file.latestCommit} />
            <Time />
        </tr>
    );
}
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

function FileIcon({ file }) {
    let icon = 'fa-file-text-o';
    if (file.type === 'folder') {
        icon = 'fa-folder';
    }

    return (
        <td className="file-icon">
            <i className={'fa ${icon}'} />
        </td>
    );
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

function FileName({ file }) {
    return (
        <React.Fragment>
            <FileIcon file={file} />
            <td className="file-name">{file.name}</td>
        </React.Fragment>
    );
}
FileName.propTypes = {
    file: PropTypes.object.isRequired
};

const CommitMessage = ({ file }) => (
    <td className="commit-message">{file.message}</td>
);
CommitMessage.propTypes = {
    file: PropTypes.object.isRequired
};

const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: '2016-07-11 21:24:00',
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: '2016-07-11 21:24:00',
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: '2016-07-18 21:24:00',
        latestCommit: {
            message: 'Added a readme'
        }
    }
];

ReactDOM.render(
    <FileList files={testFiles} />,
    document.querySelector('#root')
);
