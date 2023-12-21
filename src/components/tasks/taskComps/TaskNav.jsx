const TaskNav = () => {
    return (
        <div className="navbar bg-base-100 lg:hidden rounded-sm mb-5">
        <div className="flex justify-center w-full">
          <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>
                  Parent
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default TaskNav;