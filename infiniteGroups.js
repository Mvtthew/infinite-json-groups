function DrawGroup(group, level) {
	const groupBoxElement = document.createElement("div");
	groupBoxElement.classList.add("group");

	const groupName = document.createElement("p");
	groupName.innerText = group.name;
	groupBoxElement.appendChild(groupName);

	if (group.children.length > 0) {
		groupName.addEventListener("click", () => {
			groupBoxElement
				.querySelectorAll(".group-child-" + level)
				.forEach((groupChild) => {
					groupChild.classList.toggle("hidden");
				});
		});
		groupName.classList.add("has-children");
		groupName.innerHTML += " ⬇️";

		const children = group.children;
		children.forEach((child) => {
			const childrenElement = DrawGroup(child, level + 1);
			childrenElement.classList.add("group-child");
			childrenElement.classList.add("group-child-" + level);
			childrenElement.classList.add("hidden");
			groupBoxElement.appendChild(childrenElement);
		});
	}

	return groupBoxElement;
}

const groups = [
	{
		name: "Group 1",
		children: [
			{
				name: "Group 1.1",
				children: [
					{
						name: "Group 1.1.1",
						children: [],
					},
				],
			},
			{
				name: "Group 1.2",
				children: [
					{
						name: "Group 1.2.1",
						children: [],
						name: "Group 1.2.2",
						children: [],
					},
				],
			},
		],
	},
	{
		name: "Group 2",
		children: [
			{
				name: "Group 2.1",
				children: [
					{
						name: "Group 2.1.1",
						children: [],
					},
				],
			},
			{
				name: "Group 2.2",
				children: [
					{
						name: "Group 2.2.1",
						children: [],
						name: "Group 2.2.2",
						children: [],
					},
				],
			},
		],
	},
];

groups.forEach((group) => {
	document.getElementById("infinite-groups").appendChild(DrawGroup(group, 0));
});
