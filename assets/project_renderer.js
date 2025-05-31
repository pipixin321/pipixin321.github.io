// Functions.

function render_project(project_name,
    figure_path,
    title_name,
    author_list,
    material_list,
    award_name = null) {
    if (document.getElementsByName(project_name).length === 0) {
        return;
    }

    var img = document.createElement('img');
    img.src = figure_path;
    img.setAttribute('style',
        'width: 100%; max-height: 120px; object-fit: cover;');

    var title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.innerHTML = title_name;

    var author = document.createElement('div');
    author.setAttribute('class', 'author');
    author.innerHTML = '';
    for (var idx = 0; idx < author_list.length; idx++) {
        if (idx < author_list.length - 1 &&
            (author_list[idx + 1] == 'equal' ||
                author_list[idx + 1] == 'corresponding')) {
            author.innerHTML += (
                '<span name="' +
                author_list[idx] +
                '" title="' +
                author_list[idx + 1] +
                '"></span>');
            idx++
        } else {
            author.innerHTML += (
                '<span name="' +
                author_list[idx] +
                '" title="' +
                '"></span>');
        }
        if (idx < author_list.length - 1) {
            author.innerHTML += ', ';
        }
    }

    var material = document.createElement('div');
    material.setAttribute('class', 'material');
    material_list.innerHTML = '';
    for (var idx = 0; idx < material_list.length; idx++) {
        material.innerHTML += (
            '<a href="' +
            material_list[idx][1] +
            '" target="_blank">' +
            material_list[idx][0] +
            '</a>');
        if (idx < material_list.length - 1) {
            material.innerHTML += ' / ';
        }
    }

    if (award_name) {
        var award = document.createElement('div');
        award.setAttribute('class', 'award');
        award.innerHTML = award_name;
    }

    var row = document.getElementsByName(project_name)[0];
    var cell = row.insertCell(0);
    cell.setAttribute('width', '25%');
    cell.appendChild(img);
    cell = row.insertCell(1);
    cell.appendChild(title);
    cell.appendChild(author);
    cell.appendChild(material);
    if (award_name) {
        cell.appendChild(award);
    }
};

function render_author(author_name, link = null, alias = null) {
    var list = document.getElementsByName(author_name);
    for (var idx = 0; idx < list.length; idx++) {
        var contribution = list[idx].title;
        var tailing = '';
        if (contribution === 'equal') {
            tailing = '*';
        } else if (contribution === 'corresponding') {
            tailing = '<sup>+<sup>';
        }

        var context = '';
        if (alias) {
            context = alias + tailing;
        } else {
            context = author_name + tailing;
        }

        if (link) {
            list[idx].innerHTML = (
                '<a href="' +
                link +
                '" target="_blank">' +
                '<span style="white-space:nowrap">' + context + '</span>' +
                '</a>');
        } else {
            list[idx].innerHTML = context;
        }

        if (author_name === 'Huaxin Zhang') {
            list[idx].setAttribute('class', 'me');
        }
    }
};




// Template.

render_project(
    project_name = 'template',
    figure_path = './assets/projects/',
    title_name = '',
    author_list = [
        '',
    ],
    material_list = [
        ['Paper', ''],
        ['Project', ''],
        ['Code', ''],
        ['Demo', ''],
    ],
    award_name = null,
);

// Projects.
render_project(
    project_name = 'GAM-Net',
    figure_path = './assets/projects/GAM-Net.png',
    title_name = 'Optimization of Forcemyography Sensor Placement for Arm Movement Recognition',
    author_list = [
        'Xiaohao Xu',
        'Zihao Du',
        'Huaxin Zhang',
        'Ruichao Zhang',
        'Zihan Hong',
        'Qin Huang',
        'Bin Han'
    ],
    material_list = [
        ['IROS 2022', 'https://arxiv.org/abs/2207.10915'],
        ['Code', 'https://github.com/JerryX1110/IROS22-FMG-Sensor-Optimization'],
    ],
    award_name = 'Oral',
);

render_project(
    project_name = 'CPN',
    figure_path = './assets/projects/CPN.png',
    title_name = 'Context-aware Proposal Network for Temporal Action Detection',
    author_list = [
        'Xiang Wang',
        'Huaxin Zhang',
        'Shiwei Zhang',
        'Changxin Gao',
        'Yuanjie Shao',
        'Nong Sang'
    ],
    material_list = [
        ['CVPR 2022 WorkShop', 'https://arxiv.org/abs/2206.09082'],
    ],
    award_name = 'First place winning solution for temporal action detection task in CVPR-2022 AcitivityNet Challenge',
);

render_project(
    project_name = 'HR-Pro',
    figure_path = './assets/projects/HR-Pro.png',
    title_name = 'Point-supervised Temporal Action Localization via Hierarchical Reliability Propagation',
    author_list = [
        'Huaxin Zhang',
        'Xiang Wang',
        'Xiaohao Xu',
        'Zhiwu Qing',
        'Changxin Gao',
        'Nong Sang'
    ],
    material_list = [
        ['AAAI 2024', 'https://arxiv.org/pdf/2308.12608'],
        ['Code', 'https://github.com/pipixin321/HR-Pro'],
    ],
    award_name = null,
);

render_project(
    project_name = 'GlanceVAD',
    figure_path = './assets/projects/GlanceVAD.png',
    title_name = 'GlanceVAD: Exploring Glance Supervision for Label-efficient Video Anomaly Detection',
    author_list = [
        'Huaxin Zhang',
        'Xiang Wang',
        'Xiaohao Xu',
        'Xiaonan Huang',
        'Chuchu Han',
        'Yuehuan Wang',
        'Changxin Gao',
        'Shanjun Zhang',
        'Nong Sang'
    ],
    material_list = [
        ['ICME 2025', 'https://arxiv.org/pdf/2403.06154'],
        ['Code', 'https://github.com/pipixin321/GlanceVAD'],
    ],
    award_name = 'Oral',
);

render_project(
    project_name = 'Arcana',
    figure_path = './assets/projects/Arcana.png',
    title_name = 'Improving Multi-modal Large Language Model through Boosting Vision Capabilities',
    author_list = [
        'Yanpeng Sun',
        'Huaxin Zhang',
        'Xinyu Zhang',
        'Qiang Chen',
        'Nong Sang',
        'Gang Zhang',
        'Jingdong Wang',
        'Zechao Li'
    ],
    material_list = [
        ['arXiv', 'https://arxiv.org/pdf/2410.13733'],
        ['Project', 'https://arcana-project-page.github.io/'],
        ['Code', 'https://github.com/syp2ysy/Arcana'],
    ],
    award_name = null,
);

render_project(
    project_name = 'HolmesVAD',
    figure_path = './assets/projects/HolmesVAD.gif',
    title_name = 'Holmes-VAD: Towards Unbiased and Explainable Video Anomaly Detection via Multi-modal LLM',
    author_list = [
        'Huaxin Zhang',
        'Xiaohao Xu',
        'Xiang Wang',
        'Jialong Zuo',
        'Chuchu Han',
        'Xiaonan Huang',
        'Changxin Gao',
        'Yuehuan Wang',
        'Nong Sang'
    ],
    material_list = [
        ['arXiv', 'https://arxiv.org/pdf/2406.12235'],
        ['Project', 'https://holmesvad.github.io/'],
        ['Code', 'https://github.com/pipixin321/HolmesVAD'],
    ],
    award_name = null,
);

render_project(
    project_name = 'HolmesVAU',
    figure_path = './assets/projects/HolmesVAU.png',
    title_name = 'Holmes-VAU: Towards Long-term Video Anomaly Understanding at Any Granularity',
    author_list = [
        'Huaxin Zhang',
        'Xiaohao Xu',
        'Xiang Wang',
        'Jialong Zuo',
        'Xiaonan Huang',
        'Changxin Gao',
        'Shanjun Zhang',
        'Li Yu',
        'Nong Sang'
    ],
    material_list = [
        ['CVPR 2025', 'https://arxiv.org/pdf/2412.06171'],
        ['Code', 'https://github.com/pipixin321/HolmesVAU'],
    ],
    award_name = 'Highlight (3%)',
);


render_project(
    project_name = 'Customizable-VLM',
    figure_path = './assets/projects/Customizable-VLM.png',
    title_name = 'Customizing Visual-Language Foundation Models for Multi-Modal Anomaly Detection and Reasoning',
    author_list = [
        'Xiaohao Xu',
        'Yunkang Cao',
        'Huaxin Zhang',
        'Nong Sang',
        'Xiaonan Huang'
    ],
    material_list = [
        ['CSCWD 2025', 'https://arxiv.org/pdf/2403.11083'],
        ['Code', 'https://github.com/Xiaohao-Xu/Customizable-VLM'],
    ],
    award_name = 'Best Student Paper Award',
);




// Authors.
render_author('Huaxin Zhang', 'https://scholar.google.com.hk/citations?user=oyfu0pgAAAAJ&hl=zh-CN');
render_author('Xiang Wang', 'https://scholar.google.com.hk/citations?user=cQbXvkcAAAAJ&hl=zh-CN');
render_author('Xiaohao Xu', 'https://scholar.google.com.hk/citations?user=3Ifn2DoAAAAJ&hl=zh-CN');
render_author('Zhiwu Qing', 'https://scholar.google.com.hk/citations?user=q9refl4AAAAJ&hl=zh-CN');
render_author('Zhiwu Qing', 'https://scholar.google.com.hk/citations?user=q9refl4AAAAJ&hl=zh-CN');
render_author('Changxin Gao', 'https://scholar.google.com.hk/citations?user=4tku-lwAAAAJ&hl=zh-CN');
render_author('Nong Sang', 'https://scholar.google.com.hk/citations?user=ky_ZowEAAAAJ&hl=zh-CN');
render_author('Zihao Du', '');
render_author('Ruichao Zhang', '');
render_author('Zihan Hong', '');
render_author('Qin Huang', '');
render_author('Bin Han', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=NPi48NQAAAAJ');
render_author('Shiwei Zhang', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=ZO3OQ-8AAAAJ');
render_author('Yuanjie Shao', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=GqA1wSgAAAAJ');
render_author('Xiaonan Huang', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=MNKU_WcAAAAJ');
render_author('Chuchu Han', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=2wWnDSQAAAAJ');
render_author('Yuehuan Wang', '');
render_author('Shanjun Zhang', 'https://dblp.org/pid/28/7230.html');
render_author('Yanpeng Sun', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=a3FI8c4AAAAJ');
render_author('Xinyu Zhang', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=PSzJxD8AAAAJ');
render_author('Qiang Chen', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=CUGCp3sAAAAJ');
render_author('Gang Zhang', '');
render_author('Zechao Li', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=L6J2V3sAAAAJ');
render_author('Jingdong Wang', 'https://jingdongwang2017.github.io/');
render_author('Jialong Zuo', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=R5OWszMAAAAJ');
render_author('Li Yu', '');
render_author('Yunkang Cao', 'https://caoyunkang.github.io/');

